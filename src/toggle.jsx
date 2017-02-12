import React from 'react';

export default class Toggle extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            debug: true,
            relay: {},
            http: -1,
            checked: false,
            response_time: -1,
            rid: 'relay' + this.props.rid
        }
    }

    componentDidMount() {
        setInterval( function() {
            console.log( 'interval status' );
            this.status();
        }.bind( this ), this.props.refresh );

//        setInterval( function() {
//            console.log( 'interval forceupdate' );
//            this.forceUpdate();
//        }.bind( this ), this.props.refresh );

    }

    componentWillMount() {
        this.status();
    }

    status() {
        let url = this.props.restRoot + '/relay/' + this.props.rid + '/status';
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType( "application/json" );
        xobj.open( 'GET', url, true );
        xobj.onreadystatechange = function() {

            //decreasingBlur( xobj.readyState, this.refs.toggle );

            if ( xobj.readyState < 4 ) {
                this.setState( {
                    http: xobj.readyState
                });
            }

            if ( xobj.readyState == 4 && xobj.status == "200" ) {
                let t = xobj.responseText;
                let j = JSON.parse( t )[this.state.rid];
                this.setState( {
                    relay: j,
                    checked: this.isPowered( j ),
                    response_time: Date.now()
                });
            }
        }.bind( this );
        xobj.send( null );
    }

    toggle() {
        let url = this.props.restRoot + '/relay/' + this.props.rid + '/toggle';
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType( "application/json" );
        xobj.open( 'GET', url, true );
        xobj.onreadystatechange = function() {
            if ( xobj.readyState < 4 ) {
                this.setState( {
                    http: xobj.readyState
                });
            }
            if ( xobj.readyState == 4 && xobj.status == "200" ) {
                let j = JSON.parse( xobj.responseText )[this.state.rid];
                this.setState( {
                    http: xobj.readyState,
                    relay: j,
                    checked: this.isPowered( j ),
                    response_time: Date.now()
                });
            }
        }.bind( this );
        xobj.send( null );
    }

    isPowered( s ) {
        let bs = undefined;
        if ( s.state == "0" || s.status == "0" ) {
            bs = true;
        }
        if ( s.state == "1" || s.status == "1" ) {
            bs = false;
        }
        // if(this.state.debug) console.log('isPowered',s,bs);
        return bs;
    }

    render() {
        return (
            <div ref="toggle" id="toggle" className="borderLine">
                <label style={{ float: 'right' }} className="switch">
                    <input type="checkbox" checked={this.state.checked} onChange={this.toggle.bind( this )} />
                    <div className="slider"></div>
                </label>
                <span title={this.props.title + '@ ' + this.state.response_time}>{this.props.title}</span>
            </div> );
    }
}
