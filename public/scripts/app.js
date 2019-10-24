'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One ', 'Two ']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options ? React.createElement(
        'p',
        null,
        'Here are your options: ',
        app.options
    ) : React.createElement(
        'p',
        null,
        'No options'
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
    age: 18,
    location: 'Windsor, UK'
};

function getLocation(user) {
    if (user.location != undefined) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            user.location
        );
    };
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name: ',
        user.name ? user.name : 'Anon'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user)
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
