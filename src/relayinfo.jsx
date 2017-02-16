import React from 'react';

var RelayInfo = React.createClass({
    getInitialState: function () {
        return {response_time: undefined};
    },
    componentDidMount() {
        setInterval(function () {
            let detailview = document.getElementById("detailview");
            let detailstate = detailview.getAttribute("open");
            console.log(detailview, detailstate);
            if (detailstate != null) {
                console.log('interval load relayinfo');
                this.load();
            } else {
                console.log(detailstate);
            }

        }.bind(this), this.props.refresh);
    },
    componentWillMount: function () {
        this.load();
    },
    sso: function () {
        console.log('sso');
        let url = this.props.restRoot + '/relay/info';
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', url, true);
        xobj.onreadystatechange = function () {
            // if(debug) console.log('sso:', xobj.readyState, xobj.status );
            this.setState({
                httpstate: xobj.readyState,
                response_time: new Date().toISOString()
            });

            if (xobj.readyState == 0) {
                this.refs.detailview.style.WebkitFilter = "blur(5px)";
                this.refs.detailview.style.Filter = "blur(5px)";
            }
            if (xobj.readyState == 1) {
                this.refs.detailview.style.WebkitFilter = "blur(4px)";
                this.refs.detailview.style.Filter = "blur(4px)";
            }
            if (xobj.readyState == 1) {
                this.refs.detailview.style.WebkitFilter = "blur(3px)";
                this.refs.detailview.style.Filter = "blur(3px)";
            }
            if (xobj.readyState == 2) {
                this.refs.detailview.style.WebkitFilter = "blur(2px)";
                this.refs.detailview.style.Filter = "blur(2px)";
            }
            if (xobj.readyState == 3) {
                this.refs.detailview.style.WebkitFilter = "blur(1px)";
                this.refs.detailview.style.Filter = "blur(1px)";
            }
            if (xobj.readyState == 4) {
                this.refs.detailview.style.WebkitFilter = "blur(0px)";
                this.refs.detailview.style.Filter = "blur(0px)";
            }
            // if(debug) console.log('RelayInfo:', xobj.readyState, xobj.status );
            if (xobj.readyState == 4 && xobj.status == "200") {
                let t = xobj.responseText;
                let j = JSON.parse(t);
                // if(debug) console.log(JSON.stringify(j,null,3));
                this.setState({
                    info: j,
                    // dummy: Math.random(),
                    response_time: new Date().toISOString()
                });
                document
                    .getElementById("detailview")
                    .setAttribute("open", true);
            }
        }.bind(this);
        xobj.send(null);
    },
    load: function () {
        console.log('load');
        let url = this.props.restRoot + '/relay/info';
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', url, true);
        xobj.onreadystatechange = function () {
            this.setState({
                httpstate: xobj.readyState,
                response_time: new Date().toISOString()
            });

            if (xobj.readyState == 4 && xobj.status == "200") {
                let t = xobj.responseText;
                let j = JSON.parse(t);
                console.log(j);
                this.setState({
                    info: j,
                    response_time: new Date().toISOString()
                });
                document
                    .getElementById("detailview")
                    .setAttribute("open", true);
            }
        }.bind(this);
        xobj.send(null);
    },
    render: function () {
        let jsontxt = JSON.stringify(this.state, null, 3);
        return (
            <details ref="detailview" id="detailview">
                <summary>Debug</summary>
                <pre>{jsontxt}</pre>
            </details>
        );
    }
});

module.exports = RelayInfo;
