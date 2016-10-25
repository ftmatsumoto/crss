import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  getValidationState() {
    let email = this.state.value;
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length > 0) {
      if (re.test(email)) {
        return 'success';
      } else {
        return 'error';
      }
    }
  }

  sendEmail(e) {
    // console.log($);
    e.preventDefault();
    let currContext = this;
    let request = new XMLHttpRequest();
    let data = JSON.stringify({email: this.state.value});
    request.open('POST', '/email', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 201) {
        let responseObj = JSON.parse(request.responseText);
        console.log(responseObj);
      }
    };
    request.send(data);
    this.setState({ value: '' });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.sendEmail.bind(this)}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
        <h4>Aula experimental grátis! Cadastre seu email!</h4>
          <div className="inputbox-form">
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Digite o seu email"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <HelpBlock></HelpBlock>
          <Button type="submit" className="cadastrar">Cadastrar</Button>
        </FormGroup>
      </form>
    );
  }
};

export default FormExample;
