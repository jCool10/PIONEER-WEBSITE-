import { createStore, combineReducers } from 'redux';

import { reducers } from './reducers/reducer';

const rootReducer = combineReducers({ reducers });

export const store = createStore(rootReducer);
