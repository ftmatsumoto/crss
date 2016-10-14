import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ReactStormpath, { Router, AuthenticatedRoute, LoginLink, HomeRoute, LoginRoute } from 'react-stormpath';

import App from './container/App';
import Chat from './container/chat';
import Checkin from './container/checkin';
import Coach from './container/coach';
import Home from './container/home';
import Payment from './container/payment';
import Price from './container/price';
import ProfilePage from './container/profile';
import Schedule from './container/schedule';
import Team from './container/team';
import Wod from './container/wod';

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
      <Route path="/chat" component={Chat}/>
      <Route path="/checkin" component={Checkin}/>
      <Route path="/pagamento" component={Payment}/>
      <Route path="/wod" component={Wod}/>
    </AuthenticatedRoute>
  </Route>
);
