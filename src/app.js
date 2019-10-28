const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderFunction();
    };
};

const clearArray = (event) => {
    event.preventDefault();
    app.options = [];
    renderFunction();
}



const renderFunction = () => {
    const template = (
        <div> 
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options: ': 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={clearArray}>Remove All</button>
            <ol>
                {app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

let appRoot = document.getElementById('app');
renderFunction();