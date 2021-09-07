import { combineReducers } from 'redux';
import { storiesReducer } from './storiesReducer';
import { userDataReducer } from './userDataReducer';
import { dataReducer } from './dataReducer';

export const rootReducer = combineReducers({
    stories: storiesReducer,
    userData: userDataReducer,
    data: dataReducer
});