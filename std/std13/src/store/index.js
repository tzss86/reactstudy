import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { scenics, fetching } from './reducers';
import stateData from '../../data/initialState';

const logger = store => next => action => {
  console.groupCollapsed('dispatching', action.type);
  console.log('prev state', store.getState());
  console.log('action', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const saver = store => next => action => {
  const result = next(action);
  localStorage['redux-store'] = JSON.stringify(store.getState());
  return result;
};

const storeFactory = (initialState = stateData) => {
  const ls = localStorage['redux-store'];
  return applyMiddleware(thunk, logger, saver)(createStore)(
    combineReducers({ scenics, fetching }), ls ? JSON.parse(ls) : initialState,
  );
};

export default storeFactory;
