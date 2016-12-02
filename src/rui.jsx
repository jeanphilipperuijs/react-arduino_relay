import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'rui';
import Footer from 'rui';
import ArduinoRelays from './relay.jsx';

let header = document.getElementById( "header" );
let relay = document.getElementById( "relay" );
let footerblock = document.getElementById( "footerblock" );

ReactDOM.render( <Header />, header );


let debug = true;
let authed = false;

if ( debug ) console.log( document.location );

if ( document.location.protocol == 'file:' ) {
    if ( debug ) console.log( 'authed by fileprto' );
    authed = true;
}
if ( !authed && document.location.hostname == 'relay.ruijs.fr' ) {
    if ( debug ) console.log( 'authed by hostname' );
    authed = true;
}
if ( !authed && document.location.hostname == 'localhost' ) {
    if ( debug ) console.log( 'authed by localhost' );
    authed = true;
}
if ( authed || debug ) {
    ReactDOM.render( <ArduinoRelays />, relay );
} else {
    document.title = 'no soup for you';
    ReactDOM.render( <h1>{document.title}</h1>, document.body );
}

ReactDOM.render( <Footer />, footerblock );
