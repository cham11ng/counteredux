import {
  ADD_COUNTER,
  DECREMENT,
  INCREMENT,
  INITIAL_INDEX,
  INITIAL_VALUE,
  REMOVE_COUNTER
} from '../utils/constants';

export default (state = [INITIAL_VALUE], action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return [
        ...state,
        INITIAL_VALUE
      ];

    case REMOVE_COUNTER:
      return [
        ...state.slice(INITIAL_INDEX, action.index),
        ...state.slice(action.index + 1)
      ];

    case INCREMENT:
      return [
        ...state.slice(INITIAL_INDEX, action.index),
        state[action.index] + 1,
        ...state.slice(action.index + 1)
      ];

    case DECREMENT:
      return [
        ...state.slice(INITIAL_INDEX, action.index),
        state[action.index] - 1,
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
}
