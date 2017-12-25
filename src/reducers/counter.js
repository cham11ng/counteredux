import { INITIAL_VALUE, INCREMENT, DECREMENT } from '../utils/constants';

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
