import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Counter.css';
import CounterView from '../containers/CounterView';
import CounterControl from '../containers/CounterControl';

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Counteredux</h1>
      </header>
      <CounterView/>
      <CounterControl/>
    </div>
  );
};
