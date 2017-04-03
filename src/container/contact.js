import React, { Component } from 'react';

import messengerlogo from '../asset/messenger.svg';
import mailoutline from '../asset/mailoutline.svg';
import phone from '../asset/phone.svg';
import whatsapp from '../asset/whatsapp.svg';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      firstError: "",
      firstValue: "",
      lastError: "",
      lastValue: "",
      emailError: "",
      emailValue: "",
      msgError: "",
      msgValue: ""
    };
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  onChange(field, event) {
    if (field === "nome") {
      this.setState({
        firstError: "",
        firstValue: event.target.value
      });
    } else if (field === "sobrenome") {
      this.setState({
        lastError: "",
        lastValue: event.target.value
      });
    } else if (field === "email") {
      this.setState({
        emailError: "",
        emailValue: event.target.value
      });
    } else if (field === "mensagem") {
      this.setState({
        msgError: "",
        msgValue: event.target.value
      });
    }
  }

  getValidationState() {
    let nome = this.state.firstValue;
    let sobrenome = this.state.lastValue;
    let email = this.state.emailValue;
    let message = this.state.msgValue;

    let nameregex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
    let emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let msgregex = /^([A-Za-z0-9áÁéÉíÍóÓúÚãÃõÕàÀèÈìÌòÒùÙâÂêÊôÔ\ \_\.\,\!\"\'\/\$\r\n])+$/;
    if (nome.length > 0 && sobrenome.length > 0 && email.length > 0 && message.length > 0) {
      if (emailregex.test(email) && nameregex.test(nome) && nameregex.test(sobrenome) && msgregex.test(message)) {
        return "success";
      } else {
        if (!nameregex.test(nome)) {
          this.setState({
            firstError: "Campo obrigatório"
          });
        }
        if (!nameregex.test(sobrenome)) {
          this.setState({
            lastError: "Campo obrigatório"
          });
        }
        if (!emailregex.test(email)) {
          this.setState({
            emailError: "Preencha o e-mail de forma correta"
          });
        }
        if (!msgregex.test(message)) {
          this.setState({
            msgError: "Mensagem contém caracteres não permitidos."
          });
        }
        if (message.length >= 250) {
          this.setState({
            msgError: "Mensagem deve conter menos que 250 caracteres."
          });
        }
        return "error";
      }
    }
  }

  sendForm(e) {
    e.preventDefault();
    let currContext = this;
    let request = new XMLHttpRequest();
    if (this.getValidationState() === "success") {
      let data = JSON.stringify({
        firstValue: this.state.firstValue,
        lastValue: this.state.lastValue,
        emailValue: this.state.emailValue,
        msgValue: this.state.msgValue
      });
      request.open("POST", "/contact-us", true);
      request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 201) {
          currContext.setState({
            open: true
          });
        }
      };
      request.send(data);
      this.setState({
        firstValue: "",
        lastValue: "",
        emailValue: "",
        msgValue: ""
      });
    }
  }

  render() {
    let formStyle = {
      text: {
        marginLeft: "10px",
        width: "90%"
      },
      button: {
        margin: "auto",
        marginTop: "20px",
        marginBottom: "10px",
        width: "50%"
      }
    };

    return (
      <div className="contact-container">
        <div className="contact-container-left">
          <h2 style={{margin: "20px 0px 10px"}}><b>CONTATO</b></h2>
          <a href="https://m.me/crossfitki"><div className="contact-image"><img src={messengerlogo}/></div><p className="contact-text">Messenger</p></a>
          <a href="mailto:contato@crossfitki.com.br"><div className="contact-image"><img src={mailoutline}/></div><p className="contact-text">contato@crossfitki.com.br</p></a>
          <a href="tel:+5511965746947"><div className="contact-image"><img src={whatsapp}/></div><p className="contact-text">(11) 96574-6947</p></a>
          <a href="tel:+551150824557"><div className="contact-image"><img src={phone}/></div><p className="contact-text">(11) 5082-4557</p></a>
        </div>
        <div className="contact-container-right" >
          <Paper zDepth={1}>
            <h2 style={{margin: "20px 10px 0px 10px", paddingTop: "10px"}}><b>DÚVIDAS?</b></h2>
            <form style={{display: "flex", flexDirection: "column"}} onSubmit={this.sendForm.bind(this)}>
              <TextField
                errorText= {this.state.firstError}
                floatingLabelText="Nome"
                name="nome"
                onChange={this.onChange.bind(this, "nome")}
                style={formStyle.text}
                value={this.state.firstValue}
              />
              <TextField
                errorText= {this.state.lastError}
                floatingLabelText="Sobrenome"
                name="sobrenome"
                onChange={this.onChange.bind(this, "sobrenome")}
                style={formStyle.text}
                value={this.state.lastValue}
              />
              <TextField
                errorText= {this.state.emailError}
                floatingLabelText="E-mail"
                name="email"
                onChange={this.onChange.bind(this, "email")}
                style={formStyle.text}
                value={this.state.emailValue}
              />
              <TextField
                errorText= {this.state.msgError}
                floatingLabelText="Mensagem"
                maxLength="250"
                multiLine={true}
                name="mensagem"
                onChange={this.onChange.bind(this, "mensagem")}
                rows={4}
                rowsMax={4}
                style={formStyle.text}
                value={this.state.msgValue}
              />
              <RaisedButton style={formStyle.button} label="Enviar" type="submit" primary={true} />
              <Dialog
                title="Obrigado pelo contato"
                actions={[<FlatButton
                          label="Ok"
                          primary={true}
                          onTouchTap={this.handleClose.bind(this)}
                        />]}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose.bind(this)}
              >
                Mensagem enviada com sucesso!
              </Dialog>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

export default Contact;
