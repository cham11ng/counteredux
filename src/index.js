import React from 'react';
import './stylesheets/index.css';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
