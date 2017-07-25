import React from 'react';
//import { decreasingBlur } from './decreasingBlur.js';
import { decreasingBlur } from 'decreasingblur';

export default class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            relay: {},
            http: -1,
            toggleDelayMs: 0,
            checked: undefined,
            response_time: -1
        };
        this.rid = 'relay' + this.props.rid;
        this.urlToggle = `${this.props.restRoot}/relay/${this.props.rid}/toggle`;
        this.urlStatus = `${this.props.restRoot}/relay/${this.props.rid}/status`;

        this.toggle = this.toggle.bind(this);
        this.status = this.status.bind(this);
        this.load = this.load.bind(this);
        this.changeDelay = this.changeDelay.bind(this);
    }

    componentDidMount() {
        setInterval(function () {
            this.status();
        }.bind(this), this.props.refresh);
    }

    componentWillMount() {
        this.status();
    }

    status() {
        this.load(this.urlStatus, 0);
    }

    toggle() {
        this.setState({ http: -1 });
        this.load(this.urlToggle, this.state.toggleDelayMs);
    }

    load(url, delay = 0) {
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', url, true);
        xobj.onreadystatechange = function () {
            decreasingBlur(xobj.readyState, this.refs.toggle, this.props.debug);
            if (xobj.readyState < 4) {
                this.setState({ http: xobj.readyState });
            }
            if (xobj.readyState == 4 && xobj.status == "200") {
                let j = JSON.parse(xobj.responseText)[this.rid];
                this.setState({
                    http: xobj.readyState,
                    relay: j,
                    checked: this.isPowered(j),
                    response_time: Date.now()
                });
            }
        }.bind(this);

        setTimeout(() => {
            xobj.send(null);
        }, delay)

    }

    isPowered(s) {
        let bs = undefined;
        if (s.state == "0" || s.status == "0") {
            bs = true;
        }
        if (s.state == "1" || s.status == "1") {
            bs = false;
        }
        return bs;
    }

    changeDelay(e) {
        let v = Number(e.target.value) * 1000;
        this.setState({ toggleDelayMs: v });
    }
    render() {
        return (
            <div className="borderLine" style={{ columnCount: 3 }} ref="toggle" key={`toggle${this.props.rid}`}>
                <div>
                    <h2 style={{ marginLeft: '0.5em' }}>{this.props.title}</h2>
                </div>

                <div>
                    <label className="switch">
                        <input

                            type="checkbox"
                            checked={this.state.checked}
                            onChange={this
                                .toggle} />
                        <div className="slider"
                            style={{ backgroundColor: this.state.http < 4 ? 'orange' : 'rgb(72,0,0)' }}>
                        </div>
                    </label>
                </div>
                <div>
                    <input
                        min="1"
                        step="2"
                        max={60 * 60 * 24}
                        type="number" style={{
                            fontSize: '1em',
                            margin: '0.2em',
                            height: '2em',
                            width: '6em',
                        }}
                        placeholder={`delay (${this.state.toggleDelayMs}s)`}
                        onChange={this.changeDelay} />
                </div>
            </div >
        );
    }
}
