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
ReactDOM.render(templateTwo, appRoot);
