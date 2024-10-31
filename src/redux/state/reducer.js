import {INITIALIZED, USER} from './types';

const initialState = {
  initialized: false,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
