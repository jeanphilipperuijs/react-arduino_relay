import React from 'react';
import LocalizationString from 'react-localization';
let locstr = new LocalizationString( {
    en: { title: { potrait: 'Response', landscape: 'Reponse Time' } },
    fr: { title: { potrait: 'Response', landscape: 'Reponse Time' } },
    nl: { title: { potrait: 'Response', landscape: 'Reponse Time' } }
});
export default class ResponseTime extends React.Component {
    render() {
        return ( <span>
            <span className="portrait_only">
                <span>{locstr.title.potrait}</span>
                <span className="tright">
                    {this.props.value}
                </span>
            </span>
            <span className="landscape_only">
                <span>{locstr.title.landscape}</span>
                <span className="tright">
                    {this.props.value}
                </span>
            </span>
        </span>
        )
    }
}
