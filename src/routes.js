import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './container/App';
import Home from './container/home';
import Equipe from './container/equipe';
import Horario from './container/horario';
import Preco from './container/preco';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/equipe" component={Equipe}/>
    <Route path="/horarios" component={Horario}/>
    <Route path="/precos" component={Preco}/>
  </Route>
);
