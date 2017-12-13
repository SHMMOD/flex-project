import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import entitiesReducer from './entities_reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  entities: entitiesReducer
});

export default rootReducer;
