import React, { Component } from 'react';
import './todo-list-item.css';
export default class TodoListItem extends Component {// деструктуририуем (props) полученые свойства(label, important) передаем как параметры в TodoListItem  
  
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      };
    });
  };

  onImportantClick = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };

  render () {
    const { label, onDelete } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';

    if(done) {
      classNames += ' done';
    }
    if(important) {
      classNames += ' important';
    }

    return  (
      <div className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={ this.onLabelClick }>
          { label }
        </span>
        <span>
          <button 
            type="button" className="btn btn-outline-success btn-sm"
            onClick={ this.onImportantClick }>
              <i className="fa fa-exclamation" />
          </button>
          <button 
            type="button" 
              onClick={onDelete}
              className="btn btn-outline-danger btn-sm">
              <i className="fa fa-trash-o" />
          </button>
        </span>
      </div>
    );
  };
};