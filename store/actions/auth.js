import { SET_EXPIRE_TIME } from './types';

export const setExpireTime = () => ({
  type: SET_EXPIRE_TIME,
  payload: localStorage.getItem('expires_at')
});
