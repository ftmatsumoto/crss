import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class scheduleform extends Component {
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
      phoneError: "",
      phoneValue: "",
      controlledDate: null,
      timeValue: null,
      timeError: ""
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
    } else if (field === "telefone") {
      this.setState({
        phoneError: "",
        phoneValue: event.target.value
      });
    }
  }

  handleDateChange(event, date) {
    this.setState({
      controlledDate: date
    });
  }

  handleDropdown(event, index, value) {
    this.setState({
      timeValue: value
    });
  }

  disableDates(date) {
    let today = new Date();
    return date.getDay() === 0 || date.getDay() === 6 || date < today;
  }

  getValidationState() {
    let nome = this.state.firstValue;
    let sobrenome = this.state.lastValue;
    let email = this.state.emailValue;
    let phone = this.state.phoneValue;
    let cdate = this.state.controlledDate;
    let ctime = this.state.timeValue;

    let nameregex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
    let emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let phoneregex = /^([0-9]{2,3})[ ]?([0-9]{4,5})[ ]?([0-9]{4})$/;
    if (nome.length > 0 && sobrenome.length > 0 && email.length > 0 && phone.length > 0) {
      if (emailregex.test(email) && nameregex.test(nome) && nameregex.test(sobrenome) && phoneregex.test(phone) && cdate !== null && ctime !== null) {
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
        if (!phoneregex.test(phone)) {
          this.setState({
            phoneError: "DDD 0000 00000 ou DDD 00000 00000"
          });
        }
        if (!cdate) {
          this.setState({
            timeError: "Selecione uma data"
          });
        }
        if (!ctime) {
          this.setState({
            timeError: "Selecione um horário"
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
        phoneValue: this.state.phoneValue,
        dateValue: this.state.controlledDate,
        timeValue: this.state.timeValue
      });
      request.open("POST", "/aula-experimental", true);
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
        phoneValue: "",
        dateValue: null,
        timeValue: null
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
      <div>
        <Paper zDepth={1}>
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
              errorText= {this.state.phoneError}
              floatingLabelText="Telefone"
              name="telefone"
              onChange={this.onChange.bind(this, "telefone")}
              style={formStyle.text}
              value={this.state.phoneValue}
            />
            <DatePicker
              autoOk={true}
              disableYearSelection={true}
              firstDayOfWeek={0}
              floatingLabelText="Selecione uma data"
              onChange={this.handleDateChange.bind(this)}
              shouldDisableDate={this.disableDates.bind(this)}
              style={formStyle.text}
              value={this.state.controlledDate}
            />
            <SelectField
              errorText={this.state.timeError}
              floatingLabelText="Selecione um horário"
              style={formStyle.text}
              onChange={this.handleDropdown.bind(this)}
              value={this.state.timeValue}
            >
              <MenuItem value={null} primaryText="" />
              <MenuItem value={"6:00 - 7:00"} primaryText="6:00 - 7:00" />
              <MenuItem value={"7:00 - 8:00"} primaryText="7:00 - 8:00" />
              <MenuItem value={"8:00 - 9:00"} primaryText="8:00 - 9:00" />
              <MenuItem value={"18:00 - 19:00"} primaryText="18:00 - 19:00" />
              <MenuItem value={"19:00 - 20:00"} primaryText="19:00 - 20:00" />
              <MenuItem value={"20:00 - 21:00"} primaryText="20:00 - 21:00" />
            </SelectField>
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
              Aula agendada com sucesso!
            </Dialog>
          </form>
        </Paper>
      </div>
    );
  }
}

export default scheduleform;
