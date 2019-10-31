class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: ['thing one', 'thing two', 'thing three', 'thing four']
		};
	};
	render() {
		const title = 'Indecision App';
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header title={title} subtitle={subtitle}></Header>
				<Action></Action>
				<Options options={this.state.options}></Options>
				<AddOption></AddOption>
			</div>
		);
	};
};

class Option extends React.Component {
	render() {
		return (
			<div>
				{this.props.optionText}
			</div>
		);
	};
};

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	};
};

class Action extends React.Component {

	handleClick() {
		alert('ayyyy');
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>What should I do?</button>
			</div>
		);
	};
};

class Options extends React.Component {

	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	};

	handleRemoveAll() {
		alert(this.props.options);
	};

	render() {
		return (
			<div>
				{
					this.props.options.map((option) => <Option key={option} optionText={option}></Option>)
				}
				<button onClick={this.handleRemoveAll}>Remove all options</button>
			</div>
		);
	};
};

class AddOption extends React.Component {

	handleAddOption(event) {
		event.preventDefault();
		const option = event.target.elements.option.value;
	
		if (option) {
			alert(option);
		};
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type='text' name='option'></input>
					<button>Add Option</button>
				</form>
			</div>
		);
	};
};

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));