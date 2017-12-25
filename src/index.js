import React from 'react';
import './stylesheets/index.css';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootElement = document.getElementById('root');

const render = () => ReactDOM.render(
  <App store={store}/>,
  rootElement
);

render();
store.subscribe(render);
