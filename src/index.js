import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { updateCurrent } from './reducers/todo';
import './index.css';

const actions = bindActionCreators({
  updateCurrent,
}, store.dispatch)

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <App
      todos={state.todos}
      currentTodo={state.currentTodo}
      changeCurrent={actions.updateCurrent}
    />,
    document.getElementById('root')
  );
}

render();

store.subscribe(render);

registerServiceWorker();
