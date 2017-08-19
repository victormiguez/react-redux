import React, { Component } from 'react';

import logo from './logo.svg';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo-App">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
