import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionHistory from 'material-ui/svg-icons/action/history';
import ActionCreditCard from 'material-ui/svg-icons/action/credit-card';

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */

const containerStyle = {
  position: 'fixed',
  bottom: '0px',
  height: '60px',
  width: '100%'
};

const BottomNavbar = (props) => (
  <Paper style={containerStyle} zDepth={1} className="mobile-version">
    <BottomNavigation selectedIndex={props.selectedIndex}>
      <BottomNavigationItem
        label="Histórico"
        icon={<ActionHistory />}
        onTouchTap={() => {
          browserHistory.push("/result");
          props.selectBottomTab(0);
        }}
      />
      <BottomNavigationItem
        label="Check In"
        icon={<IconLocationOn />}
        onTouchTap={() => {
          browserHistory.push("/checkin");
          props.selectBottomTab(1);
        }}
      />
      <BottomNavigationItem
        label="Pagamento"
        icon={<ActionCreditCard />}
        onTouchTap={() => {
          browserHistory.push("/payment");
          props.selectBottomTab(2);
        }}
      />
    </BottomNavigation>
  </Paper>
);


export default BottomNavbar;