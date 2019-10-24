var template = (
    <div> 
        <h1>Some Info</h1> 
        <p>Does this change?</p>
        <ol>
            <li>I'm a list item</li>
        </ol>
    </div>
);

var secondTemplate = (
    <div>
        <h1>Max Stevenson</h1>
        <p>Age: 28</p>
        <p>Location: London</p>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(secondTemplate, appRoot);