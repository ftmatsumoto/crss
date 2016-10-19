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
    let request = new XMLHttpRequest();
    let context = this;
    request.open('GET', '/userprofile', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.onreadystatechange = () => {
      if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        // console.log(request, request.responseText);
        let obj = JSON.parse(request.responseText);
        context.setState({
          firstName: obj.firstName,
          lastName: obj.lastName,
          email: obj.email,
          address: obj.address,
        });
      }
    };
    request.send();
  }

  update(e) {
    e.preventDefault();
    let request = new XMLHttpRequest();
    let data = JSON.stringify({name: "Felipe2"});
    request.open('PUT', '/userprofile', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(data);
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