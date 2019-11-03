import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption.js';

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: props.options
		};
	};

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => ({ options }));
			};
		} catch (error) {

		};
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		};
	};

	handleDeleteOptions() {
		this.setState(() => ({ options: [] }));
	};

	handleDeleteOption(option) {
		this.setState((prevState) => ({
			options: prevState.options.filter((element) => { return element != option })
		}));
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

		this.setState((prevState) => ({
			options: prevState.options.concat(option)
		}));
	};

	render() {
		const title = 'Indecision App';
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header
					title={title}
					subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handleClick={this.handleClick} />
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption} />
				<AddOption
					handleAddOption={this.handleAddOption} />
			</div>
		);
	};
};

IndecisionApp.defaultProps = {
	options: []
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'some default'
};

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove all options</button>
			{props.options.length === 0 && <p>Please add an option to get started!</p> }
			{
				props.options.map((option) => (
					<Option
						key={option}
						optionText={option}
						handleDeleteOption={props.handleDeleteOption}
					/>
				))
			}
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button onClick={(e) => {
				props.handleDeleteOption(props.optionText);
			}}>
				remove
			</button>
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));