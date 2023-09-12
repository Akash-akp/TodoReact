import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import TodoItem from './components/TodoItem.jsx';
import Button from './components/Button.jsx';

function App() {
  return (
    <div className='TodoContainer'>
      <Header />
      <TodoItem />
      <Button />
    </div>
  );
}

export default App;
