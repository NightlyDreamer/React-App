import React, { Component } from 'react';

import './add-item.css';

export default class AddItem extends Component {
	state = {
		label: ''
	};

	onChange = (e) => {
		this.setState({
			label: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAdd(this.state.label)
		this.setState({
			label: ''
		});
	};

	render() {
		return(
			<form 
				className="add-item mt-3 d-flex"
				onSubmit={this.onSubmit}>
				<input
					className="form-control mr-2"
					type='text'
					onChange={ this.onChange }
					placeholder="What did you needs ?"
					value={this.state.label} />
				
				<button 
					className="btn btn-outline-secondary"
					type='button'
					onClick={this.onSubmit}>
					Add
				</button>
			</form>
		);
	};
};