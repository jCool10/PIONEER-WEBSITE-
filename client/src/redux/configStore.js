import { createStore, combineReducers } from 'redux';

import { reducers } from './reducers/reducer';
import { MemberReducer } from './reducers/MemberReducer';
import { EventReducer } from './reducers/EventReducer';

const rootReducer = combineReducers({ reducers, MemberReducer, EventReducer });

export const store = createStore(rootReducer);
