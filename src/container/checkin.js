import React, { Component, PropTypes } from 'react';
import { Authenticated } from 'react-stormpath';

import ClassDialog from '../component/classdialog.js';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

let today = new Date('Oct 15 2016');

class Checkin extends Component {
  static contextTypes = {
    authenticated: React.PropTypes.bool,
    user: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      lesson: [],
      checkinCF: [],
      users: []
    };
  }

  componentWillMount() {
    let request = new XMLHttpRequest();
    let currContext = this;
    request.open('GET', `/classes?q=${today.getTime()}&email=${this.context.user.email}`, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        let responseObj = JSON.parse(request.responseText);
        currContext.setState({
          lesson: this.state.lesson.concat(responseObj.allLessons),
          checkinCF: this.state.lesson.concat(responseObj.checkedLessons)
        });
      }
    };
    request.send();
  }

  toggleClass(classObj) {
    let request = new XMLHttpRequest();
    let data = JSON.stringify({
      allLessons: this.state.lesson,
      checked: this.isUserChecked(classObj._id),
      classId: classObj._id,
      email: this.context.user.email,
      otherCFLesson: this.state.checkinCF,
      schedule: classObj.schedule,
      wod: classObj.wod
    });
    let currContext = this;
    request.open('PUT', '/checkin', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        let responseObj = JSON.parse(request.responseText);
        currContext.setState({
          checkinCF: responseObj.checkedLessons,
          users: responseObj.usersChecked
        });
      }
    };
    request.send(data);
  }

  openDialog(classId) {
    let request = new XMLHttpRequest();
    let currContext = this;
    request.open('GET', `/checkedusers?q=${classId}`, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        let responseObj = JSON.parse(request.responseText);
        currContext.setState({
          users: responseObj
        });
      }
    };
    request.send();
  }

  closeDialog() {
    this.setState({
      users: []
    });
  }

  isUserChecked(classId) {
    return this.state.checkinCF.some((item) => {
      return item === classId;
    });
  }

  render() {
    return (
      <div>
        <List>
          <Subheader>Click to check-in</Subheader>
          {this.state.lesson.map((item, index) => {
            return <ClassDialog key={index} classId={item._id} toggleClass={this.toggleClass.bind(this, item)} isUserChecked={this.isUserChecked(item._id)} schedule={item.schedule} openDialog={this.openDialog.bind(this)} closeDialog={this.closeDialog.bind(this)} clients={this.state.users} />
          })}
        </List>
      </div>
    );
  }
}

export default Checkin;