'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Some Info'
    ),
    React.createElement(
        'p',
        null,
        'Does this change?'
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

var secondTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Max Stevenson'
    ),
    React.createElement(
        'p',
        null,
        'Age: 28'
    ),
    React.createElement(
        'p',
        null,
        'Location: London'
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(secondTemplate, appRoot);
