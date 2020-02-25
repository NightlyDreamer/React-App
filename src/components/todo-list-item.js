import React from 'react';

const TodoListItem = ({ label, important = false }) => {// деструктуририуем (props) полученые свойства(label, important) передаем как параметры в TodoListItem  
    
  const Style = {
    color: important ? 'red' : 'black'
  }

  return  <span style={ Style }>{ label }</span>;
};

export default TodoListItem;