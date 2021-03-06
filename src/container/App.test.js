import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

it ('App exists', () => {
  expect(typeof App).toEqual('function');
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, div);
});

