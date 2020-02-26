import React from 'react';
import StausItemFilter from '../status-item-filter';
import './search-panel.css';


const SearchPanel = () => {
	const SearchText = 'Hi';
	return (
		<div className="input-group mb-3">
			<input 
				className="search-panel input-group-prepend" 
				placeholder={SearchText} />
			<StausItemFilter />
		</div>
	);
};

export default SearchPanel;