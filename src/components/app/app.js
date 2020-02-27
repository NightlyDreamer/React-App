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
		],
		term: ''
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

	toggleProperty(arr, id, propName){
		const idx = arr.findIndex(e => e.id === id);
		const oldItem = arr[idx]
		const newItem ={...oldItem, [propName]: !oldItem[propName]};
		return [
				...arr.slice(0, idx),
				newItem,
				...arr.slice(idx + 1)
		];
	};

	done = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			};
		});
	};

	important = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			};
		});
	};

	search = (items, term) => {
		if(term.length === 0){
			return items;
		}
		return items.filter( (item) => {
			return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
		});
	};

	onSearch = (term) => {
		this.setState( {term} );
	};

	render() {
		const {todoData, term} = this.state;

		const visiblItems = this.search(todoData, term);

		const doneCount = todoData.filter(e => e.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className="app">
				<Header toDo={todoCount} done={doneCount} />
				<div className="input-group mb-3">
					<SearchPanel onSearch={this.onSearch} />
					<StatusItemFilter />
				</div>
				<TodoList
					todos={visiblItems}
					onDeleted={ this.deleteItem }
					onDone={ this.done }
					onImoprtant={ this.important }
				/>
				<AddItem onAdd={ this.addItem }/>
			</div>
		);
	};
};