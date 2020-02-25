import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem important label="Router"/></li>
            <li><TodoListItem label="Redux"/></li>
        </ul>
    );
;}

export default TodoList;