import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    return <h1>Todo List</h1>;
};

const SearchPanel = () => {
    return <input placeholder="Search someone..." />;
};

const TodoList = () => {
    return (
        <ul>
            <li>Props</li>
            <li>State</li>
            <li>Fetch API</li>
            <li>Life Component</li>
            <li>React Hooks</li>
            <li>React Router</li>
        </ul>
    );
;}
const App = () => {
    return (
        <div>

        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
