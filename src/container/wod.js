import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ExerciseSet from '../component/exerciseset.js';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Wod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseSetArray: [],
      exerciseObjArray: [],
      value: 0
    };
  }

  componentWillMount() {
    let request = new XMLHttpRequest();
    let context = this;
    request.open('GET', '/exercises', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        let responseObj = JSON.parse(request.responseText);
        context.setState({
          exerciseObjArray: responseObj
        });
      }
    };
    request.send();
  }

  handleChange(event, index, value) {
    this.setState({
      value: value
    });
  }

  handleDelete(id) {
    let obj = this.state.exerciseSetArray.filter((current) => {
      return (Number(current.props.id) === id);
    })[0];
    let i = this.state.exerciseSetArray.indexOf(obj);
    this.setState({
      exerciseSetArray: [...this.state.exerciseSetArray.slice(0, i), ...this.state.exerciseSetArray.slice(i + 1)]
    });
  }

  addWodSet() {
    let id = Date.now();
    this.setState({
      exerciseSetArray: this.state.exerciseSetArray.concat([<ExerciseSet key={id} id={id} exerciseArray={this.state.exerciseObjArray} handleDelete={this.handleDelete.bind(this)}/>])
    });
  }

  render() {
    let total;
    if (this.state.value === 1) {
      total = (
        <TextField
          hintText="00:00:00"
          floatingLabelText="Tempo total"
        />
      );
    } else if (this.state.value === 2) {
      total = (
        <TextField
          hintText="Minutos"
          floatingLabelText="Rodadas"
        />
      );
    } else if (this.state.value === 3) {
      total = (
        <TextField
          hintText="Numero de rodadas"
          floatingLabelText="Rodadas"
        />
      );
    }
    return (
      <div>
        <ul>
          <li>Create / edit WOD</li>
        </ul>
        <div>
          <TextField
            hintText="WOD Name"
            floatingLabelText="WOD Name"
          />
          <DropDownMenu value={this.state.value} maxHeight={300} onChange={this.handleChange.bind(this)}>
            <MenuItem value={0} key={0} primaryText="For time" />
            <MenuItem value={1} key={1} primaryText="For reps" />
            <MenuItem value={2} key={2} primaryText="EMOM" />
            <MenuItem value={3} key={3} primaryText="Tabata" />
          </DropDownMenu>
          {total}
          <br />
          {this.state.exerciseSetArray}
          <br />
          <FloatingActionButton onClick={this.addWodSet.bind(this)}>
            <ContentAdd />
          </FloatingActionButton>
          <br />
          <RaisedButton label="Save" primary={true} />
        </div>
      </div>
    );
  }
}

export default Wod;