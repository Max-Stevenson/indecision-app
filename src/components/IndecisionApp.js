import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	};

	clearSelectedOption = () => {
		this.setState(() => ({
			selectedOption: undefined
		}));
	};

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};

	handleDeleteOption = (option) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((element) => { return element != option })
		}));
	};

	handleClick = () => {
		const optionIdx = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[optionIdx];
		this.setState(() => ({
			selectedOption: option
		}));
	};

	handleAddOption = (option) => {
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
				<div className='container'>
					<Action
						hasOptions={this.state.options.length > 0}
						handleClick={this.handleClick} />
					<div className='widget'>
						<Options
							options={this.state.options}
							handleDeleteOptions={this.handleDeleteOptions}
							handleDeleteOption={this.handleDeleteOption} />
						<AddOption
							handleAddOption={this.handleAddOption} />
					</div>
				</div>
				<OptionModal
					selectedOption={this.state.selectedOption}
					clearSelectedOption={this.clearSelectedOption} />
			</div>
		);
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
};

IndecisionApp.defaultProps = {
	options: []
};

Header.defaultProps = {
	title: 'Indecision App'
};