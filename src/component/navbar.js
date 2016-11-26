import React from 'react';
import { Link, browserHistory } from 'react-router';

import { Authenticated, NotAuthenticated, LogoutLink, LoginLink } from 'react-stormpath';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';

import svglogo from '../asset/KI_Cross_Fit_logo.svg';

const containerStyle = {
  position: 'fixed',
  height: '60px',
  width: '100%',
  zIndex: '100'
};

const separatorStyle = {
  margin: '0 0 0 0'
};

const navbarComponent = () => (
  <Toolbar style={containerStyle} >
    <ToolbarGroup firstChild={true} >
      <a href='/'><img style={{width: '120px', height: '80px'}} src={svglogo} /></a>
      <ToolbarSeparator style={separatorStyle} />
      <FlatButton label="Horários" onClick={() => browserHistory.push('/horarios')}/>
      <ToolbarSeparator style={separatorStyle} />
      <FlatButton label="Preços" onClick={() => browserHistory.push('/precos')}/>
      <ToolbarSeparator style={separatorStyle} />
      <FlatButton label="Equipe" onClick={() => browserHistory.push('/equipe')}/>
    </ToolbarGroup>
    <ToolbarGroup lastChild={true} >
      <NotAuthenticated>
        <a href='/login'><FlatButton label="Login" /></a>
      </NotAuthenticated>
      <Authenticated>
        <LogoutLink><FlatButton label="Logout" /></LogoutLink>
      </Authenticated>
        <ToolbarSeparator style={separatorStyle} />
      <NotAuthenticated>
        <a href='/register'><FlatButton label="Register" /></a>
      </NotAuthenticated>
    </ToolbarGroup>
  </Toolbar>
);

export default navbarComponent;
