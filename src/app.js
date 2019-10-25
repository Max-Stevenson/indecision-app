const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One ', 'Two ']
};

const template = (
    <div> 
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options: ': 'No options'}</p>
        <ol>
            <li>I'm a list item</li>
        </ol>
    </div>
);

const user = {
    name: 'Max',
    age: 18,
    location: 'Windsor, UK'
};

function getLocation(user) {
    if (user.location != undefined) {
        return <p>Location: {user.location}</p>;
    };
};

const templateTwo= (
    <div>
        <h1>Name: {user.name ? user.name : 'Anon'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user)}
    </div>
);
let appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);