import React, { Component, PropTypes } from 'react';
import { Authenticated } from 'react-stormpath';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import UsersDialog from './userdialog';

import { ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

class ClassesDialog extends Component {
  static contextTypes = {
    authenticated: React.PropTypes.bool,
    user: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen() {
    this.props.openDialog(this.props.classId);
    this.setState({open: true});
  }

  handleClose() {
    this.props.closeDialog();
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <Authenticated inGroup="(admin || coach)">
        <UsersDialog />
      </Authenticated>,
      <FlatButton
        label="Check In"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.toggleClass.bind(this)}
      />
    ];

    return (
      <div>
        <ListItem onClick={this.handleOpen.bind(this)} rightIcon={<ActionInfo />}>
          {this.props.schedule}
          {this.props.isUserChecked ? ' checked' : ''}
        </ListItem>
        <Dialog
          title="Alunos confirmados"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          autoScrollBodyContent={true}
        >
          <ul>
          {this.props.clients.map((user) => {
            return <li>{`${user.firstName} ${user.lastName}`}</li>
          })}
          </ul>
        </Dialog>
      </div>
    );
  }
}

export default ClassesDialog;
