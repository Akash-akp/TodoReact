import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import TodoItem from './components/TodoItem.jsx';
import Button from './components/Button.jsx';

function App() {
  return (
    <div>
      <h1 className='Head'>Todoie App</h1>
      <div className='wrapper'>
        <div className='todo-container'>
          <Header title="Todo App"/>
          <div>
            <TodoItem completed={true} task="Eat"/>
            <TodoItem task="Code"/>
            <TodoItem task="Sleep"/>
            <TodoItem task="Repeat"/>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
