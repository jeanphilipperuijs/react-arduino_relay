import React from 'react';

import Toggle from './toggle.jsx';
import RelayInfo from './relayinfo.jsx';
import LocalizationString from 'react-localization';

let locstr = new LocalizationString({
    en: {
        title: 'Relays',
        relay0: {
            title: 'Relay 0'
        },
        relay1: {
            title: 'Relay 1'
        }
    },
    fr: {
        title: 'Relais',
        relay0: {
            title: 'Relai 0'
        },
        relay1: {
            title: 'Relai 1'
        }
    },
    nl: {
        title: 'Relais',
        relay0: {
            title: 'Relai 0'
        },
        relay1: {
            title: 'Relai 1'
        }
    }
});

class ArduinoRelays extends React.Component {
    constructor(props) {
        super(props)
        if (title_relay0 != undefined) {
            locstr.relay0.title = title_relay0;
        }
        if (title_relay1 != undefined) {
            locstr.relay1.title = title_relay1;
        }
    }

    render() {
        let info = null;
        if (false) {
            info = (<RelayInfo
                restRoot={this.props.restRoot}
                refresh={this.props.refresh}
                debug={this.props.debug} />);
        }
        return (
            <details id="relays" className="borderLine">
                <summary><span>{locstr.title}</span></summary>
                <Toggle
                    restRoot={this.props.restRoot}
                    rid="0"
                    title={locstr.relay0.title}
                    refresh={this.props.refresh}
                    debug={this.props.debug} />
                <Toggle
                    restRoot={this.props.restRoot}
                    rid="1"
                    title={locstr.relay1.title}
                    refresh={this.props.refresh}
                    debug={this.props.debug} />
                {info}
            </details>
        );
    }
}
module.exports = ArduinoRelays;
