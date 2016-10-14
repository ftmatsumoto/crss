import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class exerciseset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange(event, index, value) {
    this.setState({
      value: value
    });
  }

  render() {
    let exerciseMenuItem = this.props.exerciseArray.map((item, index) => {
      return <MenuItem value={index} key={index} primaryText={item.name} />
    });
    return (
      <div>
        <DropDownMenu value={this.state.value} maxHeight={300} onChange={this.handleChange.bind(this)}>
          {exerciseMenuItem}
        </DropDownMenu>
        <TextField
          hintText="Reps"
          floatingLabelText="Reps"
        />
        <TextField
          hintText="Weight"
          floatingLabelText="Weight"
        />
        <RadioButtonGroup name="unit" defaultSelected="kg">
          <RadioButton
            value="kg"
            label="kg"
          />
          <RadioButton
            value="lb"
            label="lb"
          />
        </RadioButtonGroup>
        <FloatingActionButton onClick={this.props.handleDelete.bind(this, this.props.id)}>
          <NavigationClose />
        </FloatingActionButton>
        <br />
      </div>
    );
  }
}

export default exerciseset;
