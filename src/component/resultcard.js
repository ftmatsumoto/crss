import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

class resultcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      rx: true
    };
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleToggle() {
    this.setState({
      rx: !this.state.rx
    }, () => {
      console.log(this.state.rx);
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
      />
    ];

    return (
      <div onClick={this.handleOpen.bind(this)}>
        {`${this.props.result.wod.name} | ${this.props.result.executed_at}`}
        <Dialog
          title={this.props.result.wod.name}
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          autoScrollBodyContent={true}
        >
          <Toggle
            label={this.state.rx ? "Rx" : "Scaled"}
            defaultToggled={true}
            onToggle={this.handleToggle.bind(this)}
          />
          {this.props.result.wod.wod.map((set, index) => {
            return (
              <div>
                <TextField hintText={`${set.reps} x ${set.exercise} com ${set.weight} ${set.unit}`} underlineShow={false} />
                <Divider />
              </div>
            );
          })}
        </Dialog>
      </div>
    );
  }
}

export default resultcard;
