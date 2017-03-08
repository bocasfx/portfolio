import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navigation from './navigation';
import projects from './projects';

const portfolioApp = combineReducers({
  routing: routerReducer,
  navigation: navigation,
  projects: projects
});

export default portfolioApp;
