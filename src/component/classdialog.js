import React, { Component } from 'react';
import { Authenticated } from 'react-stormpath';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import UsersDialog from './userdialog';

/*
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
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
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <Authenticated inGroup="(admin || coach)">
        <UsersDialog />
      </Authenticated>,
      <FlatButton
        label="Check In"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.toggleClass.bind(this)}
      />
    ];

    return (
      <div>
        <li onClick={this.handleOpen.bind(this)}>
          {this.props.schedule}
          {this.props.isUserChecked ? ' checked' : ''}
        </li>
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
            return <li>{user}</li>
          })}
          </ul>
        </Dialog>
      </div>
    );
  }
}

export default ClassesDialog;
