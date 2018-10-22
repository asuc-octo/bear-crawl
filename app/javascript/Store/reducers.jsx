import majorReducer from './Reducers/majorReducer.jsx';

import { createStore } from 'redux';

const store = createStore(majorReducer);

export default store