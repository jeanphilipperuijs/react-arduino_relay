import React from 'react';

export default class Copyright extends React.Component {
    render() {
        return ( <span>© {new Date().getFullYear()}</span> );
    }
}