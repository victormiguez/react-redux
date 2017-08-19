import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { updateCurrent } from './reducers/todo';
import './index.css';

const actions = bindActionCreators({
  updateCurrent,
}, store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <App changeCurrent={actions.updateCurrent} />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
