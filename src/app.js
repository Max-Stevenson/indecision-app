class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: ['thing one', 'thing two', 'thing three', 'thing four']
		};
	};

	handleDeleteOptions() {
		this.setState(() => {
			return {
				options: []
			};
		});
	};

	handleAddOption(option) {		
		this.setState((prevState) => {
			return {
				options: prevState.options.concat(option)
			};
		});
	};

	render() {
		const title = 'Indecision App';
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header title={title} subtitle={subtitle}></Header>
				<Action hasOptions={this.state.options.length > 0}></Action>
				<Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}></Options>
				<AddOption handleAddOption={this.handleAddOption}></AddOption>
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
				<button 
				onClick={this.handleClick}
				disabled={!this.props.hasOptions}
				>What should I do?
				</button>
			</div>
		);
	};
};

class Options extends React.Component {

	render() {
		return (
			<div>
			<button onClick={this.props.handleDeleteOptions}>Remove all options</button>
				{
					this.props.options.map((option) => <Option key={option} optionText={option}></Option>)
				}
			</div>
		);
	};
};

class AddOption extends React.Component {

	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
	};

	handleAddOption(event) {
		event.preventDefault();
		const option = event.target.elements.option.value.trim();				

		if (option) {
			this.props.handleAddOption(option);
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