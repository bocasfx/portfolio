import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navigation from './navigation';

const portfolioApp = combineReducers({
  routing: routerReducer,
  navigation: navigation
});

export default portfolioApp;
