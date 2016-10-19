import React, { Component } from 'react';
import { Authenticated } from 'react-stormpath';

import ClassDialog from '../component/classdialog.js';

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
      checkedin: []
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
          checkedin: this.state.lesson.concat(responseObj.checkedLessons)
        });
      }
    };
    request.send();
  }

  toggleClass(classId) {
    let request = new XMLHttpRequest();
    let data = JSON.stringify({
      email: this.context.user.email,
      checked: this.isUserChecked(classId),
      classId: classId,
      otherclass: this.state.checkedin,
      t: today.getTime()
    });
    let currContext = this;
    request.open('PUT', '/checkin', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        let responseObj = JSON.parse(request.responseText);
        currContext.setState({
          checkedin: responseObj.checked,
          lesson: responseObj.lesson
        });
      }
    };
    request.send(data);
  }

  isUserChecked(classId) {
    return this.state.checkedin.some((item) => {
      return item._id === classId;
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.lesson.map((item, index) => {
            return <ClassDialog key={index} classId={item._id} toggleClass={this.toggleClass.bind(this, item._id)} isUserChecked={this.isUserChecked(item._id)} schedule={item.schedule} clients={item.client} today={today}/>
          })}
        </ul>
      </div>
    );
  }
}

export default Checkin;