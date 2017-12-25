import { ADD_COUNTER, DECREMENT, INCREMENT, REMOVE_COUNTER } from '../utils/constants';

export const increaseCounterAction = index => ({
  index,
  type: INCREMENT
});

export const decreaseCounterAction = index => ({
  index,
  type: DECREMENT
});

export const addCounterAction = () => ({
  type: ADD_COUNTER
});

export const removeCounterAction = index => ({
  index,
  type: REMOVE_COUNTER
});
