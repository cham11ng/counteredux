import * as React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { addCounterAction } from '../actions';

let CounterControl = ({dispatch}) => {
  return (
    <section className="section">
      <Button className="button"
              value="Add Counter"
              onClick={() => dispatch(addCounterAction())}/>
    </section>
  );
};

CounterControl = connect()(CounterControl);

export default CounterControl;
