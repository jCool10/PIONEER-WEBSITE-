import { createStore, combineReducers } from 'redux';

import { reducers } from './reducers/reducer';
import { MemberReducer } from './reducers/MemberReducer';

const rootReducer = combineReducers({ reducers, MemberReducer });

export const store = createStore(rootReducer);
