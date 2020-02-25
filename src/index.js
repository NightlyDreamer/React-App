import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
	
	const todoData = [
		{ label: 'React Redux', important: true },
		{ label: 'React Router', important: false },
		{ label: 'React', important: true },
	];

	return (
		<div>
			<Header />
			<SearchPanel />
			<TodoList todos={todoData}/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
