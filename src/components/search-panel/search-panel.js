import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
	
	state = {
		term: ''
	};

	onChange = (e) => {
		const term = e.target.value;
		this.setState({term});
		this.props.onSearch(term)
	};

	render () {
		const SearchText = 'Hi';

		return <input 
				className="search-panel input-group-prepend" 
				placeholder={SearchText}
				onChange={this.onChange}
				value={this.state.label} />;
	};
};