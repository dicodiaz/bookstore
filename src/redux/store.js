import { createStore } from 'redux';
import reducer from './ducks/counter';

const store = createStore(reducer);

export default store;
