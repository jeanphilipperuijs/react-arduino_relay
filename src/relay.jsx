import React from 'react';
import LocalizationString from 'react-localization';

import Toggle from './toggle.jsx';
import RelayInfo from './relayinfo.jsx';

let locstr = new LocalizationString( {
    en: {
        title: 'Relays',
        relay0: { title: 'Router' },
        relay1: { title: 'Printer' }
    },
    fr: {
        title: 'Relais',
        relay0: { title: 'Routeur' },
        relay1: { title: 'Imprimante' }
    },
    nl: {
        title: 'Relays',
        relay0: { title: 'Router' },
        relay1: { title: 'Printer' }
    }
});
class ArduinoRelays extends React.Component {
    render() {
        return (
            <div id="relays" className="borderLine">
                <h2>{locstr.title}</h2>
                <Toggle restRoot={this.props.restRoot} rid="0" title={locstr.relay0.title} refresh={60000} />
                <Toggle restRoot={this.props.restRoot} rid="1" title={locstr.relay1.title} refresh={120000} />
                <RelayInfo restRoot={this.props.restRoot} />
            </div>
        );
    }
}
module.exports = ArduinoRelays;
