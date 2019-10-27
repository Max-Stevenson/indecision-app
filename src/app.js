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

let count = 0;
const addOne = () => {
    console.log('addOne');
};

const minusOne = () =>{
    console.log('minusOne');
};

const reset = () => {
    console.log('reset');
};

const templateTwo= (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne} id="myButton" className="buttonClass">+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);
let appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);