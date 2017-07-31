import React from 'react';
import { decreasingBlur } from 'decreasingblur';


class RelayInfo extends React.Component {

    constructor() {
        super();
        this.setState({
            httpstate: -1,
            data: null
        });
    }

    componentDidMount() {
        setInterval(() => {
            this.load();
        }, this.props.refresh);
    }

    load() {
        //  console.log('load');
        let url = this.props.restRoot + '/relay/info';
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', url, true);
        xobj.onreadystatechange = () => {
            this.setState({
                httpstate: xobj.readyState,
            });

            decreasingBlur(xobj.readyState, this.refs.detailview,  this.props.debug);
            if (xobj.readyState == 4 && xobj.status == "200") {
                let t = xobj.responseText;
                let j = JSON.parse(t);
                this.setState({
                    data: j,
                    httpstate: xobj.readyState
                });
            }
        }
        xobj.send(null);
    }

    render() {
        let dbgtxt = null;
        try { dbgtxt = JSON.stringify(this.state.data, null, 3) }
        catch (err) { console.log(err); }

        return (
            <details ref="detailview" id="detailview" open={detailsOpen}>
                <summary>Debug</summary>
                <pre>{dbgtxt}</pre>
            </details>
        );
    }
}

module.exports = RelayInfo;
