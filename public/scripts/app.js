'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'React Experiment'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'I\'m a list item'
        )
    )
);

var user = {
    name: 'Max',
    age: 28,
    location: 'Windsor, UK'
};

var userName = 'Max';
var userAge = 28;
var userLocation = 'Windsor, UK';
var secondTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name: ',
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
