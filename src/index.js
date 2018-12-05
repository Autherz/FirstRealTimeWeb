import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import socketIOClient from 'socket.io-client'
import registerServiceWorker from './registerServiceWorker';
import App from './App';

const title = 'The Real Time Web Example!!'


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

registerServiceWorker();
// react hot loader
module.hot.accept();
