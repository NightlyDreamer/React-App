import React, { Component } from 'react';

import './status-item-filter.css';

export default class StatusItemFilter extends Component {
	btn =[
		{ name: 'all', label: 'All' },
		{ name: 'active', label: 'Active' },
		{ name: 'done', label: 'Done' }
	];

	render() {
		const{ filter, onFilterClick } = this.props;

		const buttons = this.btn.map(({name, label})=>{
			const isActive = filter === name;
			const nameClass = isActive ? 'btn-info' : 'btn-outline-secondary'
			return (
				<button 
					type="button" 
					className={`btn ${nameClass}`}
					key={name}
					onClick={ () => onFilterClick(name)}>
						{label}
				</button>
			);
		});

		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
	};
};