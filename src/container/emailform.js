import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Modal } from 'react-bootstrap';

class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showModal: false,
      message: ''
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
    if (this.getValidationState() === 'success') {
      let data = JSON.stringify({email: this.state.value});
      request.open('POST', '/email', true);
      request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 201) {
          let responseObj = JSON.parse(request.responseText);
          currContext.setState({
            showModal: true,
            message: responseObj.success ? `Email ${responseObj.email} cadastrado com sucesso!` : `Email ${responseObj.email} já está cadastrado!`
          });
        }
      };
      request.send(data);
      this.setState({ value: '' });
    } else {
      currContext.setState({
        showModal: true,
        message: 'Por favor, preencher o email de forma correta'
      });
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  close() {
    this.setState({
      showModal: false,
      message: ''
    });
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
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastro de email</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.state.message}</p>
​          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      </form>
    );
  }
};

export default FormExample;
