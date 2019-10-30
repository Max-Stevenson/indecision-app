class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision App';
		const subtitle = 'Put your life in the hands of a computer';
		const options = ['thing one', 'thing two', 'thing three', 'thing four'];

		return (
			<div>
				<Header title={title} subtitle={subtitle}></Header>
				<Action></Action>
				<Options options={options}></Options>
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

	handleRemoveAll() {
		alert('ayo');
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
	render() {
		return (
			<div>
				<button>Add Option</button>
			</div>
		);
	};
};

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));