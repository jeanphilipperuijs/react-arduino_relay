import React from 'react';

export default class ProgressCallback extends React.Component {
    render() {
        if ( this.props.http < 4 ) {
            return <progress value={this.props.http} max={3} />
        }
        return <span>{this.props.cb}</span>
    }
}
