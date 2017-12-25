import * as React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { addCounterAction } from '../actions/index';

let CounterControl = ({addCounter}) => {
  return (
    <section className="section">
      <Button className="button"
              value="Add Counter"
              onClick={addCounter}/>
    </section>
  );
};

const mapStateToProps = state => {
  return {state};
};

const mapDispatchToProps = dispatch => ({
  addCounter() {
    dispatch(addCounterAction());
  }
});

CounterControl = connect(mapStateToProps, mapDispatchToProps)(CounterControl);

export default CounterControl;
