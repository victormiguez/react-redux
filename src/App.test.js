import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const initState = {
  todos: [
    {
      id: 1,
      name: 'Foo bar',
      isComplete: false
    },
  ]
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App todos={initState.todos}/>, div);
});
