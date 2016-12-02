import React from 'react';

export default class ValueUnit extends React.Component {
    render() {
        return ( <span className="tright">&nbsp;{this.props.v} &nbsp;{this.props.u}</span> );
    }
}
