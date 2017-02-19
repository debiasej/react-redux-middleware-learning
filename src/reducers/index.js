import { combineReducers } from 'redux';
import usersReducer from './users';

const rootReducer = combineReducers({
  state: usersReducer
});

export default rootReducer;
