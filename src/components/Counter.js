import React from 'react';
import '../stylesheets/Counter.css';

export default props => {
  const {value, onIncrement, onDecrement} = props;
  return (
    <div className="text-center">
      <label htmlFor="value">{value}</label><br/>
      <button className="button increment" onClick={onIncrement}>+</button>
      <button className="button decrement" onClick={onDecrement}>-</button>
    </div>
  );
}
