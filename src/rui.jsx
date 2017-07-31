import React from 'react';
import ReactDOM from 'react-dom';

import ArduinoRelays from './arduinorelays.jsx';

let relay = document.createElement("div");
relay.id = 'arduinorelays'
document.body.appendChild(relay);

ReactDOM.render(<ArduinoRelays restRoot={relayConf.restRoot} refresh={relayConf.refresh} detailsOpen={relayConf.detailsOpen} />, relay);
