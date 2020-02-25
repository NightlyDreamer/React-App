import React from 'react';

const TodoListItem = ({ label, important = false }) => {
    
  const Style ={
    color: important ? 'red' : 'black'
  }

  return  <span style={Style}>{ label }</span>;
};

export default TodoListItem;