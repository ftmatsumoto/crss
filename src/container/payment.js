import React, { Component } from 'react';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    let request = new XMLHttpRequest();
    // let context = this;
    request.open('GET', '/payment', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.onreadystatechange = () => {
      if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        console.log(request, request.responseText);
        // let obj = JSON.parse(request.responseText);
        // context.setState({
        //   firstName: obj.firstName,
        //   lastName: obj.lastName,
        //   email: obj.email,
        //   address: obj.address,
        // });
      }
    };
    request.send();
  }

  render() {
    return (
      <div>
        PAYMENT
      </div>
    );
  }
}

export default Payment;