import React, { Component } from 'react';
import { Authenticated } from 'react-stormpath';

import NavbarComponent from '../component/navbar';
import BottomNavigation from '../component/bottomnav';
import RaisedButton from 'material-ui/RaisedButton';
import Directions from 'material-ui/svg-icons/maps/directions';

import facebooklogo from '../asset/facebook.svg';
import instagramlogo from '../asset/instagram.svg';
import googlepluslogo from '../asset/googleplus.svg';
import messengerlogo from '../asset/messenger.svg';
import mailoutline from '../asset/mailoutline.svg';
import phone from '../asset/phone.svg';
import whatsapp from '../asset/whatsapp.svg';

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
          <div className="footer-contact">
            <div className="footer-contact-left">
              <p><b>Endereço</b>
                <address>
                  Rua Dionísio da Costa, 353<br/>
                  Vila Mariana - São Paulo - SP<br/>
                  CEP 04117-110<br/>
                  <RaisedButton
                    style={{marginTop: "5px"}}
                    href="http://maps.google.com/?q=CrossFit+Ki"
                    label="Google Maps"
                    icon={<Directions />}
                  />
                </address>
              </p>
            </div>
            <div className="footer-contact-right">
              <p style={{color: "white", margin: "10px 0 0 0"}}><b>Contato</b></p>
              <a href="https://m.me/crossfitki"><img src={messengerlogo}/>Messenger</a>
              <a href="mailto:contato@crossfitki.com.br"><img src={mailoutline}/>contato@crossfitki.com.br</a>
              <a href="tel:+5511965746947"><img src={whatsapp}/>(11) 96574-6947</a>
              <a href="tel:+551150824557"><img src={phone}/>(11) 5082-4557</a>
            </div>
          </div>

          <div className="footer-social-media">
            <div className="footer-social-media-container">
              <a href="https://www.facebook.com/crossfitki"><img className="footer-logo" src={facebooklogo}/></a>
              <a href="https://www.instagram.com/crossfitki"><img className="footer-logo" src={instagramlogo}/></a>
              <a href="https://plus.google.com/+CrossfitkiBr"><img className="footer-logo" src={googlepluslogo}/></a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
