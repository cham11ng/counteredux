import React from 'react';
import '../stylesheets/App.css';
import Counter from './Counter';
import { connect } from 'react-redux';

let CounterView = ({state}) => {
  let counter = state.map((value, index) => (
    <Counter
      key={index}
      index={index}
      value={value}
    />)
  );
  return (
    <section className="section">
      {counter}
    </section>
  );
};

const mapStateToProps = state => {
  return {state};
};

CounterView = connect(mapStateToProps)(CounterView);

export default CounterView;
