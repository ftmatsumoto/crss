import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ReactStormpath, { Router, AuthenticatedRoute, LoginLink, HomeRoute, LoginRoute } from 'react-stormpath';

import App from './container/App';
import Home from './container/home';
import Team from './container/team';
import Coach from './container/coach';
import Schedule from './container/schedule';
import Price from './container/price';
import ProfilePage from './container/profile';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <HomeRoute path='/' component={Home} />
    <Route path="/equipe" component={Team}>
      <Route path="/equipe/:coach" component={Coach}/>
    </Route>
    <Route path="/horarios" component={Schedule}/>
    <Route path="/precos" component={Price}/>
    <AuthenticatedRoute>
      <HomeRoute path='/profile' component={ProfilePage} />
    </AuthenticatedRoute>
  </Route>
);
