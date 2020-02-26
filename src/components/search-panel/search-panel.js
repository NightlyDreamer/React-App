import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
	const SearchText = 'Hi';

	return <input 
			className="search-panel input-group-prepend" 
			placeholder={SearchText} />;
};

export default SearchPanel;