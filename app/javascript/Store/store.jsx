import { createStore, combineReducers } from 'redux';
import majorReducer from '../Reducers/majorReducer';
import nameReducer from '../Reducers/profileReducer';
import attributeReducer from '../Reducers/attributeReducer';
import profileReducer from '../Reducers/profileReducer';

const store = createStore(combineReducers({
    majorReducer, 
    nameReducer,
    profileReducer,
    attributeReducer
}));

export default store;
