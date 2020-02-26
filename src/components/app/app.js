import React from 'react';

import Header from '../header';
import SearchPanel from '../search-panel';
import TodoList from '../todi-list';
import './app.css';

const App = () => {
	// Используем массив todoData для хранения параметров (li) в виде оббектов вместо БД 
	const todoData = [
		{ label: 'React Redux', important: true, id: 1 },
		{ label: 'React Router', important: false, id: 2 },
		{ label: 'React', important: true, id: 3 },
	];

	return (
		<div className="app">
			<Header />
			<SearchPanel />
			<TodoList todos={todoData}/> {/* Передаем свойства детям как атрибуты */} 
		</div>
	);
};

export default App;