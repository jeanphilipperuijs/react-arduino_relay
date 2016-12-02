import React from 'react';

export default class Mail extends React.Component {
    render() {
        var mail = 'jph@amapz.com';
        return ( <a href="mailto:{mail}?subject=Probing" target="_blank">jph@amapz.com</a> );
    }
}

