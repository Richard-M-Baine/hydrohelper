
// frontend/src/store/index.js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import phReducer from './phstore'


const rootReducer = combineReducers({

  ph: phReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk) // Apply Redux Thunk middleware
);

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

  
  export default configureStore;