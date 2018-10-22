import { createStore } from 'redux';
import majorReducer from './Reducers/majorReducer';

const store = createStore(majorReducer);
export default store;
