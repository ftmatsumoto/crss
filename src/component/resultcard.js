import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import ReactGA from 'react-ga';

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
    ReactGA.event({
      category: 'Navigation',
      action: 'Clicked Link',
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
    ReactGA.event({
      category: 'Navigation',
      action: 'Clicked Link',
    });
  }

  handleToggle() {
    this.setState({
      rx: !this.state.rx
    });
    ReactGA.event({
      category: 'Navigation',
      action: 'Clicked Link',
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose.bind(this)}
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
          {this.props.result.wod.exercise_set.map((set, index) => {
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
