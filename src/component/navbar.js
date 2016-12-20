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
import svglogo from '../asset/KI_Cross_Fit_logo.svg';

const containerStyle = {
  position: 'fixed',
  height: '60px',
  width: '100%',
  zIndex: '100',
  alignItems: 'center'
};

const separatorStyle = {
  margin: '0 0 0 0'
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
      </NotAuthenticated>
    </ToolbarGroup>
    <ToolbarGroup lastChild={true} >
      <Authenticated>
        <FlatButton
          icon={<NavigationMoreVert />}
          onTouchTap={props.handleTouchPopover}
        />
        <Popover
          open={props.popoverOpen}
          anchorEl={props.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={props.handleClosePopover}
        >
          <Menu>
            <MenuItem
              primaryText="Profile"
              onTouchTap={() => {
                browserHistory.push('/profile');
                props.selectBottomTab(-1);
                props.handleClosePopover();
              }
            }/>
            <MenuItem
              primaryText="Histórico"
              onTouchTap={() => {
                browserHistory.push('/result');
                props.selectBottomTab(0);
                props.handleClosePopover();
              }
            }/>
            <MenuItem
              primaryText="Pagamentos"
              onTouchTap={() => {
                browserHistory.push('/payment');
                props.selectBottomTab(2);
                props.handleClosePopover();
              }
            } />
            <MenuItem
              primaryText="Check In"
              onTouchTap={() => {
                browserHistory.push('/checkin');
                props.selectBottomTab(1);
                props.handleClosePopover();
              }
            } />
            <LogoutLink style={stormpathStyle}><MenuItem primaryText='Log out' /></LogoutLink>
          </Menu>
        </Popover>
      </Authenticated>
      <NotAuthenticated>
        <FlatButton
          className="mobile-version"
          icon={<NavigationMoreVert />}
          onTouchTap={props.handleTouchPopover}
        />
        <Popover
          open={props.popoverOpen}
          anchorEl={props.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={props.handleClosePopover}
        >
          <Menu>
            <MenuItem
              primaryText="Login"
              href="/login"
              />
            <MenuItem
              primaryText="Register"
              href="/register"
            />
          </Menu>
        </Popover>
        <a className="desktop-version" href="/login"><FlatButton label="Login" /></a>
      </NotAuthenticated>
      <ToolbarSeparator className="desktop-version" style={separatorStyle} />
      <NotAuthenticated>
        <a className="desktop-version" href="/register"><FlatButton label="Register" /></a>
      </NotAuthenticated>
    </ToolbarGroup>
  </Toolbar>
);

export default navbarComponent;
