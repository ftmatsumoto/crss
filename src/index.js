import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Using an ES6 transpiler, like Babel.
import ReactStormpath, { Router } from 'react-stormpath';

import Routes from './routes';
import './index.css';

import ReactGA from 'react-ga';

injectTapEventPlugin();

ReactGA.initialize('UA-86048339-1', {
  debug: true
});

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const App = () => (
  <MuiThemeProvider>
    <Router history={browserHistory} onUpdate={logPageView}>{Routes}</Router>
  </MuiThemeProvider>
);

ReactStormpath.init();
ReactDOM.render( <App /> , document.getElementById('root'));
