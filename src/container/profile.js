import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

const style = {
  height: 500,
  width: '90%',
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

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

  // update(e) {
  //   e.preventDefault();
  //   let request = new XMLHttpRequest();
  //   let data = JSON.stringify({name: "Felipe2"});
  //   request.open('PUT', '/userprofile', true);
  //   request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  //   request.send(data);
  // }

  render() {
    return (
      <Paper style={style}>
        {/*<Authenticated inGroup="admin">
                  auth
                </Authenticated>*/}
        <Avatar size={100} style={{margin: '10px 0 30px 0'}}>A</Avatar>
        <h3>{`${this.state.firstName} ${this.state.lastName}`}</h3>
        <div>{this.state.email}</div>
        <div>{this.state.address}</div>
      </Paper>
    );
  }
}

export default Profile;