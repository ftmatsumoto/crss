import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

const tableData = [
  {
    horario: "6:00",
    segunda: "CrossFit",
    terca: "CrossFit",
    quarta: "CrossFit",
    quinta: "CrossFit",
    sexta: "CrossFit",
    sabado: "",
  },
  {
    horario: "7:00",
    segunda: "CrossFit",
    terca: "CrossFit",
    quarta: "CrossFit",
    quinta: "CrossFit",
    sexta: "CrossFit",
    sabado: "",
  },
  {
    horario: "8:00",
    segunda: "CrossFit",
    terca: "CrossFit",
    quarta: "CrossFit",
    quinta: "CrossFit",
    sexta: "CrossFit",
    sabado: "",
  },
  {
    horario: "9:00",
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: "CrossFit",
  },
  {
    horario: "12:30",
    segunda: "CrossFit",
    terca: "CrossFit",
    quarta: "CrossFit",
    quinta: "CrossFit",
    sexta: "CrossFit",
    sabado: "",
  },
  {
    horario: "18:00",
    segunda: "CrossFit",
    terca: "CrossFit",
    quarta: "CrossFit",
    quinta: "CrossFit",
    sexta: "CrossFit",
    sabado: "",
  },
  {
    horario: "19:00",
    segunda: "CrossFit",
    terca: "CrossFit",
    quarta: "CrossFit",
    quinta: "CrossFit",
    sexta: "CrossFit",
    sabado: "",
  },
  {
    horario: "20:00",
    segunda: "CrossFit",
    terca: "CrossFit",
    quarta: "CrossFit",
    quinta: "CrossFit",
    sexta: "CrossFit",
    sabado: "",
  },
];

const weekdays = [
  {
    label: "Segunda-feira",
    wkd: false
  },
  {
    label: "Terça-feira",
    wkd: false
  },
  {
    label: "Quarta-feira",
    wkd: false
  },
  {
    label: "Quinta-feira",
    wkd: false
  },
  {
    label: "Sexta-feira",
    wkd: false
  },
  {
    label: "Sábado",
    wkd: true
  },

];

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container-children" style={{marginTop: "20px"}}>
        <div className="desktop-table">
          <Table
            selectable={false}
          >
            <TableHeader
              adjustForCheckbox={false}
              displaySelectAll={false}
            >
              <TableRow>
                <TableHeaderColumn></TableHeaderColumn>
                <TableHeaderColumn>Segunda</TableHeaderColumn>
                <TableHeaderColumn>Terça</TableHeaderColumn>
                <TableHeaderColumn>Quarta</TableHeaderColumn>
                <TableHeaderColumn>Quinta</TableHeaderColumn>
                <TableHeaderColumn>Sexta</TableHeaderColumn>
                <TableHeaderColumn>Sábado</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              showRowHover={true}
            >
              {tableData.map((row, index) => (
                <TableRow key={index} selected={row.selected}>
                  <TableRowColumn>{row.horario}</TableRowColumn>
                  <TableRowColumn>{row.segunda}</TableRowColumn>
                  <TableRowColumn>{row.terca}</TableRowColumn>
                  <TableRowColumn>{row.quarta}</TableRowColumn>
                  <TableRowColumn>{row.quinta}</TableRowColumn>
                  <TableRowColumn>{row.sexta}</TableRowColumn>
                  <TableRowColumn>{row.sabado}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mobile-table">
          {weekdays.map((day) => (
            <div>
              <RaisedButton
                label={day.label}
                fullWidth={true}
              />
              <div >
                <Table
                  selectable={false}
                >
                  <TableBody
                    displayRowCheckbox={false}
                    showRowHover={true}
                  >
                    {tableData.map((row, index) => (
                      <TableRow key={index} selected={row.selected}>
                        <TableRowColumn style={{textAlign: "center"}}>{row.horario}</TableRowColumn>
                        <TableRowColumn style={{textAlign: "center"}}>{day.wkd ? row.sabado : row.segunda}</TableRowColumn>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Schedule;
