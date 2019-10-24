var app = {
    title: 'Indecision App',
    subtitle: 'React Experiment'
};

var template = (
    <div> 
        <h1>{app.title}</h1> 
        <p>{app.subtitle}</p>
        <ol>
            <li>I'm a list item</li>
        </ol>
    </div>
);

var user = {
    name: 'Max',
    age: 28,
    location: 'Windsor, UK'
};

var userName = 'Max';
var userAge = 28;
var userLocation = 'Windsor, UK';
var secondTemplate = (
    <div>
        <h1>Name: {user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);