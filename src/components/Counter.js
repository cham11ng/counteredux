import React from 'react';
import Button from './Button';

export default props => {
  const {value, onIncrement, onDecrement} = props;
  return (
    <div className="text-center">
      <label htmlFor="value">{value}</label><br/>
      <Button className="button increment" value="+" onClick={onIncrement} />
      <Button className="button decrement" value="-" onClick={onDecrement} />
    </div>
  );
}
