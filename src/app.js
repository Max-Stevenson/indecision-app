import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'hello');
ReactDOM.render(template, document.getElementById('app'));
console.log('hello');
