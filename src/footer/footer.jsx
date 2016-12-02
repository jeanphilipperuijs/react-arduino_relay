import React from 'react';
import Name from './name.jsx';
import Mail from './email.jsx';
import Phone from './phone.jsx';
import Copyright from './copyright.jsx';

export default class Footer extends React.Component {

    render() {
        let spacer = ' ░▒░ ';
        let begin = '▒░';
        let end = '░▒';
        return ( <footer>{begin} &nbsp;<Copyright />&nbsp;{end}</footer> );
    }
}
