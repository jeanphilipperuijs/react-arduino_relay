import React from 'react';
import ReactDOM from 'react-dom';
import ArduinoRelays from './relay.jsx';
let relay = document.createElement("div");
document.body.appendChild(relay);
ReactDOM.render( <ArduinoRelays restRoot="http://ad.amapz.com" />, relay);
