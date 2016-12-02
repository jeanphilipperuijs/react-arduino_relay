import React from 'react';

export default class ProgressBar extends React.Component {
    render() {
        return ( <progress value={this.props.http} max={4} /> );
    }
}