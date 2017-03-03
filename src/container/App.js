import React, { Component } from 'react';
import { Authenticated } from 'react-stormpath';

import NavbarComponent from '../component/navbar';
import BottomNavigation from '../component/bottomnav';
import IconButton from 'material-ui/IconButton';

import svglogo from '../asset/crossfitki_marker.svg';
import facebooklogo from '../asset/facebook.svg';
import instagramlogo from '../asset/instagram.svg';
import messengerlogo from '../asset/messenger.svg';
import mailoutline from '../asset/mailoutline.svg';
import phone from '../asset/phone.svg';

import Home from './home';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      popoverOpen: false,
      selectedIndex: 0
    };
  }

  handleToggleDrawer(event) {
    event.preventDefault();
    this.setState({drawerOpen: !this.state.drawerOpen});
  }

  handleCloseDrawer() {
    this.setState({drawerOpen: false});
  }

  handleClosePopover() {
    this.setState({popoverOpen: false});
  }

  handleTouchPopover(event) {
    event.preventDefault();
    this.setState({
      popoverOpen: true,
      anchorEl: event.currentTarget
    });
  }

  selectBottomTab(index) {
    this.setState({selectedIndex: index});
  }

  render() {
    return (
      <div>
        <div className="container-nav">
          <NavbarComponent
            drawerOpen={this.state.drawerOpen}
            popoverOpen={this.state.popoverOpen}
            handleToggleDrawer={this.handleToggleDrawer.bind(this)}
            handleCloseDrawer={this.handleCloseDrawer.bind(this)}
            handleClosePopover={this.handleClosePopover.bind(this)}
            handleTouchPopover={this.handleTouchPopover.bind(this)}
            selectBottomTab={this.selectBottomTab.bind(this)}
          />
        </div>
        <div className="container-body">
          {this.props.children || <Home />}
        </div>
        {/*<div>
                  <Authenticated>
                    <BottomNavigation
                      selectedIndex={this.state.selectedIndex}
                      selectBottomTab={this.selectBottomTab.bind(this)}
                    />
                  </Authenticated>
                </div>*/}
        <footer>
          <div className="footer-logo">
            <img className="footer-svg-ki" src={svglogo}/>
          </div>
          <div className="footer-social">
            <p>Faça parte dessa comunidade!</p>
            <div className="social-media">
              <a href="https://www.facebook.com/crossfitki"><div className="media-div"><img src={facebooklogo}/></div></a>
              <a href="https://www.instagram.com/crossfitki"><div className="media-div"><img src={instagramlogo}/></div></a>
              <a href="https://m.me/crossfitki"><div className="media-div"><img src={messengerlogo}/></div></a>
              <a href="mailto:admin@crossfitki.com.br"><div className="media-div"><img src={mailoutline}/></div></a>
              <a href="tel:+5511965746947"><div className="media-div"><img src={phone}/></div></a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
