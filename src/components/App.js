import React from 'react';
import Button from './Button';
import '../stylesheets/App.css';
import Counter from './Counter';
import '../stylesheets/Counter.css';
import { ADD_COUNTER, DECREMENT, INCREMENT, REMOVE_COUNTER } from '../utils/constants';

export default props => {
  let counter = props.store.getState().map((value, index) => (<Counter
    key={index}
    value={value}
    onIncrement={() => props.store.dispatch({type: INCREMENT, index})}
    onDecrement={() => props.store.dispatch({type: DECREMENT, index})}
  />));

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Counteredux</h1>
      </header>
      <section className="section">
        <Button className="button" value="Add Counter" onClick={() => props.store.dispatch({type: ADD_COUNTER})}/>
        <Button className="button" value="Remove Counter" onClick={() => props.store.dispatch({type: REMOVE_COUNTER})}/>
        {counter}
      </section>
    </div>
  );
};
