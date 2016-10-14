import React, { Component } from 'react';
import { Authenticated } from 'react-stormpath';

class Checkin extends Component {
  static contextTypes = {
    authenticated: React.PropTypes.bool,
    user: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      exerciseObjArray: []
    };
  }

  componentWillMount() {
    let today = new Date('Oct 14 2016');
    let xhr = new XMLHttpRequest();
    let context = this;
    xhr.open('GET', `/getclasses?q=${today.getTime()}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        let responseObj = JSON.parse(xhr.responseText);
        context.setState({
          exerciseObjArray: this.state.exerciseObjArray.concat(responseObj)
        });
      }
    };
    xhr.send();
  }

  handleAddToClass(id) {
    let request = new XMLHttpRequest();
    let data = JSON.stringify({
      email: this.context.user.email,
      id: id
    });
    request.open('POST', '/toggleclass', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(data);
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            {this.state.exerciseObjArray.map((item, index) => {
              return <li key={index} onClick={this.handleAddToClass.bind(this, item._id)}>{item.schedule}</li>
            })}
          </ul>
        </div>
        <Authenticated inGroup="(admin || coach)">
          <ul>
            <li>Create / edit classes</li>
          </ul>
          <div>
            <h3>Add client to class</h3>

          </div>
        </Authenticated>
      </div>
    );
  }
}

export default Checkin;