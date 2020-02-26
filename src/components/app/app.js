import React, { Component } from 'react';

import Header from '../header';
import SearchPanel from '../search-panel';
import StatusItemFilter from '../status-item-filter';
import TodoList from '../todi-list';

import './app.css';

export default class App extends Component {
	// Используем массив todoData для хранения параметров (li) в виде оббектов вместо БД 
	state = {
		todoData: [
			{ label: 'React Redux', important: true, id: 1 },
			{ label: 'React Router', important: false, id: 2 },
			{ label: 'React', important: true, id: 3 },
		]
	};

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex(e => e.id === id);

			// const before = todoData.slice(0, idx);
			// const after = todoData.slice(idx + 1)
			// newArr = before.concat(after)  <===>   newArr = [...before, ...after] 

			const newArr = [
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1)
			];
			
			return {
				todoData: newArr 
			}
		});
	}

	render() {
		
		return (
			<div className="app">
				<Header toDo={1} done={3} />
				<div className="input-group mb-3">
					<SearchPanel />
					<StatusItemFilter />
				</div>
				<TodoList 
					todos={this.state.todoData}
					onDeleted={ this.deleteItem }/> {/* Передаем свойства детям как атрибуты */} 
			</div>
		);
	};
};