import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import App from './App';
import Cart from './reducers/actionReducers.js'

const store = createStore(Cart)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
