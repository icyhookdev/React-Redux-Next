import { ADD_POST, GET_POSTS, GET_POST, CLEAR_POST } from '../actions/types';

const initialState = {
  posts: [],
  currentPost: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            title: payload.title,
            body: payload.description
          }
        ]
      };
    case GET_POSTS:
      return {
        ...state,
        posts: payload
      };
    case GET_POST:
      return {
        ...state,
        currentPost: payload
      };
    case CLEAR_POST:
      return {
        ...state,
        currentPost: null
      };
    default:
      return state;
  }
};
