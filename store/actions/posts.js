import { ADD_POST, GET_POSTS, GET_POST, CLEAR_POST } from './types';
import fetch from 'isomorphic-unfetch';

export const addPost = post => ({
  type: ADD_POST,
  payload: post
});

export const clearCurrentPost = () => ({ type: CLEAR_POST });

export const getPosts = () => async dispatch => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    dispatch({ type: GET_POSTS, payload: data.slice(0, 6) });
  } catch (error) {
    console.log(error);
  }
};

export const getPost = id => async dispatch => {
  try {
    dispatch(clearCurrentPost());
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    dispatch({ type: GET_POST, payload: data });
  } catch (ex) {
    console.log(ex);
  }
};
