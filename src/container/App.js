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
      navPopover: false,
      selectedIndex: 0,
      displayHowTo: false
    };
  }

  handleToggleDrawer(event) {
    event.preventDefault();
    this.setState({drawerOpen: !this.state.drawerOpen});
  }

  handleCloseDrawer() {
    this.setState({drawerOpen: false});
  }

  selectBottomTab(index) {
    this.setState({selectedIndex: index});
  }

  handleNavPopover(event) {
    event.preventDefault();

    this.setState({
      navPopover: true,
      anchorEl: event.currentTarget,
    });
  }

  handleNavPopoverClose() {
    this.setState({
      navPopover: false,
    });
  }

  handleOpenHowTo() {
    this.setState({displayHowTo: !this.state.displayHowTo});
  }

  render() {
    return (
      <div>
        <div className="container-nav">
          <NavbarComponent
            anchorEl={this.state.anchorEl}
            displayHowTo={this.state.displayHowTo}
            drawerOpen={this.state.drawerOpen}
            navPopover={this.state.navPopover}
            handleToggleDrawer={this.handleToggleDrawer.bind(this)}
            handleCloseDrawer={this.handleCloseDrawer.bind(this)}
            selectBottomTab={this.selectBottomTab.bind(this)}
            handleNavPopover={this.handleNavPopover.bind(this)}
            handleNavPopoverClose={this.handleNavPopoverClose.bind(this)}
            handleOpenHowTo={this.handleOpenHowTo.bind(this)}
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
            <div className="footer-contact-middle">
              <p style={{color: "white", margin: "10px 0 0 0"}}><b>Contato</b></p>
              <a href="https://m.me/crossfitki"><img src={messengerlogo}/>Messenger</a>
              <a href="mailto:contato@crossfitki.com.br"><img src={mailoutline}/>contato@crossfitki.com.br</a>
              <a href="tel:+5511965746947"><img src={whatsapp}/>(11) 96574-6947</a>
              <a href="tel:+551150824557"><img src={phone}/>(11) 5082-4557</a>
            </div>
            <div className="footer-contact-right">
              <a href="http://journal.crossfit.com/start.tpl?version=CFJ-white123x63" target="_blank" title="CrossFit Journal: The Performance-Based Lifestyle Resource"><img src="http://journal.crossfit.com/templates/images/white-125x63.png" width="125px" height="63px" alt="CrossFit Journal: The Performance-Based Lifestyle Resource" /></a>
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
