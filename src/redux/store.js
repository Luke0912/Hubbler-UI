import { legacy_createStore } from 'redux';
import { initState, reducer } from './reducer';

export const store = legacy_createStore(
  reducer,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
