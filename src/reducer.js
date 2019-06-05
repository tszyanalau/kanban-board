import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import global from './reducers/global/reducer';

export default combineReducers({
  global,
  router: routerReducer,
});
