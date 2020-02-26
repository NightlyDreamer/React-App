import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {// деструктуририуем (props) полученые свойства(label, important) передаем как параметры в TodoListItem  
    
  const Style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  }

  return  (
    <div className="todo-list-item">
      <span 
        className="todo-list-item-label" 
        style={ Style }>
        { label }
      </span>
      <span>
        <button 
          type="button" className="btn btn-outline-success btn-sm">
            <i className="fa fa-exclamation" />
        </button>
        <button 
          type="button" className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o" />
        </button>
      </span>
    </div>
  );
};

export default TodoListItem;