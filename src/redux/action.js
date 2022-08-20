//action type
export const ADD_RULE = 'ADD RULE';
export const ADD_ACTION = 'ADD ACTION';
export const DELETE_ALL = 'DELETE_ALL';
export const DELETE_ALL_ACTIONS = 'DELETE_ALL_ACTIONS'
export const UPDATE = 'UPDATE'

//action creator

export const addRules = (data) => {
  return {
    type: ADD_RULE,
    payload: data,
  };
};
export const addActions = (data) => {
  return {
    type: ADD_ACTION,
    payload: data,
  };
};
export const deleteAll = () => {
    return {
      type: DELETE_ALL,
    };
  };

  export const deleteAllActions = () => {
    return {
      type: DELETE_ALL_ACTIONS,
    };
  };

  export const updateRule = (id,title) => {
    return {
      type: DELETE_ALL_ACTIONS,
      payload: {
        i: id,
        t: title,
      },
    };
  };