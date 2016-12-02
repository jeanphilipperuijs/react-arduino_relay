import React from 'react';
import ValueUnit from './valueunit.jsx';
export default class Since extends React.Component {
    render() {
        let diff_ms = ( Date.now() - this.props.response_time );
        //let diff_sec_digit1 = Math.round(diff_ms/100)/10;
        let diff_sec = Math.round( diff_ms / 1000 );
        //let diff_hr_digit1 = Math.round(diff_ms/100*3600)/10;
        return ( <span className="tmiddle">{diff_sec}</span> );
    }
}
