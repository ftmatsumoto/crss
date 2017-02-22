import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { teal400, grey600 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Using an ES6 transpiler, like Babel.
import ReactStormpath, { Router } from 'react-stormpath';

import Routes from './routes';
import './index.css';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-86048339-1', {
  debug: true
});

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal400,
    primary2Color: grey600
  }
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory} onUpdate={logPageView}>{Routes}</Router>
  </MuiThemeProvider>
);

ReactStormpath.init();
ReactDOM.render( <App /> , document.getElementById('root'));
