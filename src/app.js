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
    age: 18,
    location: 'Windsor, UK'
};

function getLocation(user) {
    if (user.location != undefined) {
        return <p>Location: {user.location}</p>;
    };
};

var templateTwo= (
    <div>
        <h1>Name: {user.name ? user.name : 'Anon'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user)}
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);