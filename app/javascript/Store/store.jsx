import { createStore, combineReducers } from 'redux';
import majorReducer from './Reducers/majorReducer';
import profileReducer from './Reducers/profileReducer';
import attributeReducer from './Reducers/attributeReducer';

const store = createStore(combineReducers({
    majorReducer, 
    profileReducer,
    attributeReducer
}));

export default store;
