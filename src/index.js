import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
	// Используем массив todoData для хранения параметров (li) в виде оббектов вместо БД 
	const todoData = [
		{ label: 'React Redux', important: true, id: 1 },
		{ label: 'React Router', important: false, id: 2 },
		{ label: 'React', important: true, id: 3 },
	];

	return (
		<div>
			<Header />
			<SearchPanel />
			<TodoList todos={todoData}/> {/* Передаем свойства детям как атрибуты */} 
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
