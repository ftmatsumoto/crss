import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './container/App';
import Home from './container/home';
import Team from './container/team';
import Coach from './container/coach';
import Schedule from './container/schedule';
import Price from './container/price';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/equipe" component={Team}>
      <Route path="/equipe/:coach" component={Coach}/>
    </Route>
    <Route path="/horarios" component={Schedule}/>
    <Route path="/precos" component={Price}/>
  </Route>
);
