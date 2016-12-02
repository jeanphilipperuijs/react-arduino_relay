import React from 'react';

export default class Header extends React.Component {
    constructor( props ) {
        super( props );
        this.hostname = 'DOM.Amapz.com';
        if ( document.location.protocol == 'http:' ) {
            this.hostname = document.location.hostname;
        }
    }
    render() {
        return ( <h1>░▒▓ {this.hostname}</h1> );
    }
}
