import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
  // additional reducers could be added here
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
