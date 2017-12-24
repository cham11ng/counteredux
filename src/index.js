import React from 'react';
import './stylesheets/index.css';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counter from './reducers/counter';
import Counter from './components/Counter';

const store = createStore(counter);
const rootElement = document.getElementById('root');

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({type: 'DECREMENT'})}
  />,
  rootElement
);

render();
store.subscribe(render);
