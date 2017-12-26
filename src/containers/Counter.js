import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { decreaseCounterAction, increaseCounterAction, removeCounterAction } from '../actions';

let Counter = ({index, value, increaseCounter, decreaseCounter, removeCounter}) => {
  return (
    <div className="text-center">
      <Button className="button control" value="+" onClick={() => increaseCounter(index)}/>
      <Button className="button info" value={value}/>
      <Button className="button control" value="-" onClick={() => decreaseCounter(index)}/>
      <Button className="button danger" value="x" onClick={() => removeCounter(index)}/>
    </div>
  );
};

const mapStateToProps = state => ({state});

const mapDispatchToProps = dispatch => ({
  increaseCounter(index) {
    dispatch(increaseCounterAction(index));
  },
  decreaseCounter(index) {
    dispatch(decreaseCounterAction(index));
  },
  removeCounter(index) {
    dispatch(removeCounterAction(index));
  }
});

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
