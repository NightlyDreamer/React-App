import React, { Component } from 'react';

import Header from '../header';
import SearchPanel from '../search-panel';
import StatusItemFilter from '../status-item-filter';
import TodoList from '../todi-list';
import AddItem from '../add-item';

import './app.css';

export default class App extends Component {
	// Используем массив todoData для хранения параметров (li) в виде оббектов вместо БД 
	maxID = 100;
	state = {
		todoData: [
			this.createTodoItem('React Redux'),
			this.createTodoItem('React Router'),
			this.createTodoItem('React')
		]
	};

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxID++
		};
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
	};

	addItem = (text) => {
		const newItem = this.createTodoItem(text);

		this.setState(({ todoData }) => {
			const arr = [...todoData.slice(0), newItem];
		
			return {
				todoData: arr
			}
		});
	};

	done = (id) => {
		this.setState(({todoData}) => {
			const idx = todoData.findIndex(e => e.id === id);
			const oldItem = todoData[idx]
			const newItem ={...oldItem, done: !oldItem.done}
			const newArr = [
				...todoData.slice(0, idx),
				newItem,
				...todoData.slice(idx + 1)
			];

			return {
				todoData: newArr
			};
		});
	};

	important = (id) => {
		this.setState(({todoData}) => {
			const idx = todoData.findIndex(e => e.id === id);
			const oldItem = todoData[idx]
			const newItem ={...oldItem, important: !oldItem.important}

			const newArr = [
				...todoData.slice(0, idx),
				newItem,
				...todoData.slice(idx + 1)
			];

			return {
				todoData: newArr
			};
		});
	};

	render() {
		const doneCount = this.state.todoData.filter(e => e.done).length;
		const todoCount = this.state.todoData.length - doneCount;
		
		return (
			<div className="app">
				<Header toDo={todoCount} done={doneCount} />
				<div className="input-group mb-3">
					<SearchPanel />
					<StatusItemFilter />
				</div>
				<TodoList
					todos={this.state.todoData}
					onDeleted={ this.deleteItem }
					onDone={ this.done }
					onImoprtant={ this.important }
				/> 
				<AddItem onAdd={ this.addItem }/>
			</div>
		);
	};
};