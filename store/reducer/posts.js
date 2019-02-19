import { ADD_POST } from '../actions/types';

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
            description: payload.description
          }
        ]
      };
    default:
      return state;
  }
};
