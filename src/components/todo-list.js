import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => { //деструктурируем обьект (props) и достаем свойства 
	// В данном случае это ( todos ) переданый из index.js (<App>)

	const elements = todos.map((item) => {
		
		const {id, ...items} = item; // Достаём id и записываем оставшиеся параметры из item  в  items  
		//  Что бы не передавать не используемый в компоненте TodoListItem "id"

		return (// для каждого елемента(обьекта) масива item создаем  JSX код
			<li key={id}>
				<TodoListItem { ...items}/> 
			</li>
		);
	});

	return (
		<ul>
			{ elements }
		</ul>
	);
};

export default TodoList;