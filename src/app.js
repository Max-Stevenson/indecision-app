class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleClick = this.handleClick.bind(this);
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

	handleClick() {
		const optionIdx = Math.floor(Math.random() * this.state.options.length);
		console.log(this.state.options[optionIdx]);
		
	};

	handleAddOption(option) {
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		};

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
				<Header 
				title={title} 
				subtitle={subtitle}/>
				<Action 
				hasOptions={this.state.options.length > 0} 
				handleClick={this.handleClick}/>
				<Options 
				options={this.state.options} 
				handleDeleteOptions={this.handleDeleteOptions}/>
				<AddOption 
				handleAddOption={this.handleAddOption}/>
			</div>
		);
	};
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	);
};

const Options = (props) => {
	return (
		<div>
		<button onClick={props.handleDeleteOptions}>Remove all options</button>
			{
				props.options.map((option) => <Option key={option} optionText={option}></Option>)
			}
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			{props.optionText}
		</div>
	);
};

const Action = (props) => {
	return (
		<div>
			<button 
			onClick={props.handleClick}
			disabled={!props.hasOptions}>
			What should I do?
			</button>
		</div>
	);
};

class AddOption extends React.Component {

	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	};

	handleAddOption(event) {
		event.preventDefault();
		const option = event.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);				
		
		this.setState(() => {
			return {
				error
			};
		});
	};

	render() {
		return (
			<div>
			{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type='text' name='option'></input>
					<button>Add Option</button>
				</form>
			</div>
		);
	};
};

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));