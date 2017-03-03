import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { Authenticated, NotAuthenticated, LogoutLink, LoginLink } from 'react-stormpath';

import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Popover from 'material-ui/Popover';

import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import svglogo from '../asset/crossfitki.svg';

const containerStyle = {
  position: 'fixed',
  height: '60px',
  width: '100%',
  zIndex: '100',
  alignItems: 'center'
};

const separatorStyle = {
  margin: '0 0 0 0',
  position: 'initial'
};

const stormpathStyle = {
  margin: '10px 24px 10px 24px'
};

const navbarComponent = (props) => (
  <Toolbar style={containerStyle} >
    <ToolbarGroup firstChild={true} style={{alignItems: 'center'}}>
      <NotAuthenticated>
        <IconButton
          style={{width: '96px', height: '96px', alignItems: 'center'}}
          onTouchTap={props.handleToggleDrawer}
          className="mobile-version"
        >
          <NavigationMenu />
        </IconButton>
        <Drawer
          docked={false}
          width={200}
          open={props.drawerOpen}
          onRequestChange={props.handleCloseDrawer}
        >
          <a href="/"><img style={{width: '200px', height: '200px'}} src={svglogo} /></a>
          <Divider />
          <MenuItem
            onTouchTap={() => {
              browserHistory.push("/horarios");
              props.handleCloseDrawer();
            }}
          >Horários</MenuItem>
          <MenuItem
            onTouchTap={() => {
              browserHistory.push("/precos");
              props.handleCloseDrawer();
            }}
          >Preços</MenuItem>
          <MenuItem
            onTouchTap={() => {
              browserHistory.push("/equipe");
              props.handleCloseDrawer();
            }}
          >Equipe</MenuItem>
          <MenuItem
            onTouchTap={() => {
              browserHistory.push("/contato");
              props.handleCloseDrawer();
            }}
          >Contato</MenuItem>
          <MenuItem
            onTouchTap={() => {
              browserHistory.push("/blog");
              props.handleCloseDrawer();
            }}
          >Blog</MenuItem>
          <Divider />
        </Drawer>
      </NotAuthenticated>
      <NotAuthenticated>
        <a href="/"><img style={{width: '120px', height: '120px'}} src={svglogo} /></a>
      </NotAuthenticated>
      <Authenticated>
        <div><img style={{width: '120px', height: '120px'}} src={svglogo} /></div>
      </Authenticated>
      <NotAuthenticated>
        <FlatButton label="Horários" className="desktop-version" onTouchTap={() => browserHistory.push("/horarios")}/>
        <FlatButton label="Preços" className="desktop-version" onTouchTap={() => browserHistory.push("/precos")}/>
        <FlatButton label="Equipe" className="desktop-version" onTouchTap={() => browserHistory.push("/equipe")}/>
        <FlatButton label="Contato" className="desktop-version" onTouchTap={() => browserHistory.push("/contato")}/>
        <a href="/blog"><FlatButton label="Blog" className="desktop-version"/></a>
      </NotAuthenticated>
    </ToolbarGroup>
  </Toolbar>
);

export default navbarComponent;
