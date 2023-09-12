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
          <Header />
          <div>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
