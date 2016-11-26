import React, {Component} from 'react';
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

class BottomNavigationExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  select(index) {
    this.setState({selectedIndex: index});
  }

  render() {
    return (
      <Paper style={containerStyle} zDepth={1} className="mobile-version">
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Histórico"
            icon={<ActionHistory />}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Check In"
            icon={<IconLocationOn />}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Pagamento"
            icon={<ActionCreditCard />}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;