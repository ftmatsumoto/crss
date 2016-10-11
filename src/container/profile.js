import React, { Component } from 'react';
import Sidebar from '../component/sidebar.js';
import { Authenticated, NotAuthenticated } from 'react-stormpath';

class Profile extends Component {
  static contextTypes = {
    authenticated: React.PropTypes.bool,
    user: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // console.log(this.context);
    let xhr = new XMLHttpRequest();
    let context = this;
    xhr.open('GET', '/initialdata', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr, xhr.responseText);
        let obj = JSON.parse(xhr.responseText);
        context.setState({
          firstName: obj.firstName,
          lastName: obj.lastName,
          email: obj.email,
          address: obj.address,
        });
      }
    };
    xhr.send();
  }

  update(e) {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let data = JSON.stringify({name: "Felipe2"});
    xhr.open('PUT', '/update', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(data);
  }

  render() {
    return (
      <div>
        <Authenticated inGroup="admin">
          auth
        </Authenticated>
        {this.state.firstName}<br/>
        {this.state.lastName}<br/>
        {this.state.email}<br/>
        {this.state.address}<br/>
      </div>
    );
  }
}

export default Profile;