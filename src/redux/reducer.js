import {
  ADD_ACTION,
  ADD_RULE,
  DELETE_ALL,
  DELETE_ALL_ACTIONS,
  UPDATE,
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
    case UPDATE:
      return {
        ...store,
        rules: store.rules.map((item) =>
          item.id === payload.i ? { ...item, title: payload.t } : item
        ),
      };
    default:
      return store;
  }
};
