import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
    
    return (
        <div>
            <Header />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
