import {
  ADD_ACTION,
  ADD_RULE,
  DELETE_ALL,
  DELETE_ALL_ACTIONS,
} from './action.js';

export const initState = {
  rules: [],
  actions: [],
};

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case ADD_RULE:
      return {
        ...store,
        rules: [...store.rules, payload],
      };
    case ADD_ACTION:
      return {
        ...store,
        actions: [...store.actions, payload],
      };
    case DELETE_ALL:
      return {
        ...store,
        actions: [...store.rules.splice(0, store.rules.length)],
      };
    case DELETE_ALL_ACTIONS:
      return {
        ...store,
        action: [...store.actions.splice(0, store.actions.length)],
      };
    default:
      return store;
  }
};
