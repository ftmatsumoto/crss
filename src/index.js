import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

// Using an ES6 transpiler, like Babel.
import ReactStormpath, { Router } from 'react-stormpath';

import Routes from './routes';
import './index.css';

ReactStormpath.init();
ReactDOM.render( <Router history={browserHistory}>{Routes}</Router> , document.getElementById('root'));
