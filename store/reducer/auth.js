import { SET_EXPIRE_TIME } from '../actions/types';

const INITIAL_STATE = {
  token: null,
  expire_at: 0
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_EXPIRE_TIME:
      return {
        ...state,
        expire_at: payload
      };

    default:
      return state;
  }
};
