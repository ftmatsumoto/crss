import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import ReactStormpath, { Router, AuthenticatedRoute, LoginLink, HomeRoute, LoginRoute } from 'react-stormpath';

import App from './container/App';
import Chat from './container/chat';
import Checkin from './container/checkin';
import Coach from './container/coach';
import Contact from './container/contact';
import Description from './container/description';
import FirstClass from './container/firstclass';
import Home from './container/home';
import Payment from './container/payment';
import Price from './container/price';
import ProfilePage from './container/profile';
import ResultPage from './container/result';
import Schedule from './container/schedule';
import Team from './container/team';
import Wod from './container/wod';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <HomeRoute path='/' component={Home}/>
    <Route path="/equipe" component={Team}>
      <Route path="/equipe/:coach" component={Coach}/>
    </Route>
    <Route path="/horarios" component={Schedule}/>
    <Route path="/precos" component={Price}/>
    <Route path="/contato" component={Contact}/>
    <Route path="/o-que-e-crossfit" component={Description}/>
    <Route path="/aula-experimental" component={FirstClass}/>
    <AuthenticatedRoute>
      <HomeRoute path='/profile' component={ProfilePage} />
      <Route path="/chat" component={Chat}/>
      <Route path="/checkin" component={Checkin}/>
      <Route path="/payment" component={Payment}/>
      <Route path="/wod" component={Wod}/>
      <Route path="/result" component={ResultPage}/>
    </AuthenticatedRoute>
    <Redirect from="*" to="/"/>
  </Route>
);
