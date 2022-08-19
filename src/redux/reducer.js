import { ADD_RULE } from './action.js';

export const initState = {
  rules: [],
};

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case ADD_RULE:
      return {
        ...store,
        rules: [...store.rules, payload],
      };
    default:
      return store;
  }
};
