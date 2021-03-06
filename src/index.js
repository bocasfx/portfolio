import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import Main from './components/Main';
import Project from './components/Project';
import About from './components/About';
import reducer from './reducers';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import { createDevTools } from 'redux-devtools';
// import LogMonitor from 'redux-devtools-log-monitor';
// import DockMonitor from 'redux-devtools-dock-monitor';

// const DevTools = createDevTools(
//   <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
//     <LogMonitor theme="tomorrow" preserveScrollTop={false} />
//   </DockMonitor>
// );

// const store = createStore(reducer, DevTools.instrument());
const store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);

var onChange = () => {
  window.scrollTo(0, 0);
};

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App} onChange={onChange}>
          <IndexRoute component={Main}/>
          <Route path="/projects/:projectId" component={Project}></Route>
          <Route path="/about" component={About}></Route>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);
