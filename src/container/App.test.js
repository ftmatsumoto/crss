import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it ('App exists', () => {
  expect(typeof App).toEqual('function');
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

