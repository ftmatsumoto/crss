import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// import { Authenticated, NotAuthenticated, LogoutLink, LoginLink } from 'react-stormpath';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Popover from 'material-ui/Popover';

import svglogo from '../asset/crossfitki.svg';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import NavigationExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less';

const containerStyle = {
  position: "fixed",
  height: "60px",
  width: "100%",
  zIndex: "100",
  alignItems: "center"
};

const navbarComponent = (props) => (
  <Toolbar style={containerStyle} >
    <ToolbarGroup firstChild={true} style={{alignItems: "center"}}>
      <IconButton
        style={{width: "96px", height: "96px", alignItems: "center"}}
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
        <a href="/"><img style={{width: "200px", height: "200px"}} src={svglogo} /></a>
        <Divider />
        <MenuItem
          onTouchTap={() => {
            props.handleOpenHowTo();
          }}
          rightIcon={props.displayHowTo ? <NavigationExpandLessIcon /> : <NavigationExpandMoreIcon />}
        >COMO COMEÇAR</MenuItem>
        <Menu style={props.displayHowTo ? {padding: "10px"} : {display: "none"}}>
          <MenuItem
            onTouchTap={() => {
              browserHistory.push("/o-que-e-crossfit");
              props.handleCloseDrawer();
              props.handleOpenHowTo();
            }}
          >O QUE É CROSSFIT?</MenuItem>
          <MenuItem
            onTouchTap={() => {
              browserHistory.push("/aula-experimental");
              props.handleCloseDrawer();
              props.handleOpenHowTo();
            }}
          >AULA EXPERIMENTAL</MenuItem>
          <MenuItem
            onTouchTap={() => {
              browserHistory.push("/horarios");
              props.handleCloseDrawer();
              props.handleOpenHowTo();
            }}
          >HORÁRIOS</MenuItem>
          <MenuItem
            onTouchTap={() => {
              browserHistory.push("/precos");
              props.handleCloseDrawer();
              props.handleOpenHowTo();
            }}
          >PREÇOS</MenuItem>
        </Menu>
        <MenuItem
          onTouchTap={() => {
            browserHistory.push("/equipe");
            props.handleCloseDrawer();
          }}
        >EQUIPE</MenuItem>
        <MenuItem
          onTouchTap={() => {
            browserHistory.push("/contato");
            props.handleCloseDrawer();
          }}
        >CONTATO</MenuItem>
        <MenuItem
          onTouchTap={() => {
            props.handleCloseDrawer();
          }}
        ><a href="/blog" className="blog-link">BLOG</a></MenuItem>
        <Divider />
      </Drawer>

      <a href="/"><img style={{width: "120px", height: "60px"}} src={svglogo} /></a>
      <ToolbarGroup style={{display:"flex"}}>
        <MenuItem
          primaryText="COMO COMEÇAR"
          style={{width:"185px"}}
          className="desktop-version"
          onTouchTap={(e) => props.handleNavPopover(e)}
          rightIcon={<NavigationExpandMoreIcon />}
        >
          <Popover
            open={props.navPopover}
            anchorEl={props.anchorEl}
            anchorOrigin={{horizontal: "left", vertical: "bottom"}}
            targetOrigin={{horizontal: "left", vertical: "top"}}
            onRequestClose={() => props.handleNavPopoverClose()}
          >
            <Menu>
              <MenuItem primaryText="O QUE É CROSSFIT?" onTouchTap={() => {
                browserHistory.push("/o-que-e-crossfit");
                props.handleNavPopoverClose();
              }}/>
              <MenuItem primaryText="AULA EXPERIMENTAL" onTouchTap={() => {
                browserHistory.push("/aula-experimental");
                props.handleNavPopoverClose();
              }}/>
              <MenuItem primaryText="HORÁRIOS" onTouchTap={() => {
                browserHistory.push("/horarios");
                props.handleNavPopoverClose();
              }}/>
              <MenuItem primaryText="PREÇOS" onTouchTap={() => {
                browserHistory.push("/precos");
                props.handleNavPopoverClose();
              }}/>
            </Menu>
          </Popover>
        </MenuItem>
        <MenuItem primaryText="EQUIPE" className="desktop-version" onTouchTap={() => browserHistory.push("/equipe")}/>
        <MenuItem primaryText="CONTATO" className="desktop-version" onTouchTap={() => browserHistory.push("/contato")}/>
        <a href="/blog"><MenuItem primaryText="BLOG" className="desktop-version"/></a>
      </ToolbarGroup>
    </ToolbarGroup>
  </Toolbar>
);

export default navbarComponent;
