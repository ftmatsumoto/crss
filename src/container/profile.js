import React, { Component } from 'react';

class Profile extends Component {
  static contextTypes = {
    authenticated: React.PropTypes.bool,
    user: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Welcome {this.context.user.username}!
      </div>
    );
  }
}

export default Profile;