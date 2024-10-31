import {INITIALIZED, USER} from './types';

export const initAuth = () => {
  return {
    type: INITIALIZED,
  };
};

export const User = payload => {
  return {
    type: USER,
    payload,
  };
};
