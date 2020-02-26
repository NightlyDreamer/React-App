import React, { Component } from 'react';

import './add-item.css';

export default class AddItem extends Component {

	render() {
		const { onAdd } =this.props;
		return(
			<div className="add-item mt-3">
				<button 
					className="btn btn-outline-secondary"
					onClick={() => onAdd('Hi')}
					type='button'>
					Add what to do ...
				</button>
			</div>
		);
	};
};