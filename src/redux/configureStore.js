import { createStore } from 'redux';
import reducer from './books/books';

const store = createStore(reducer);

export default store;
