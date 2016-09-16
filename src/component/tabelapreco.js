import React from 'react';
import { Table } from 'react-bootstrap';

const tabelaHorario = () => (
  <Table responsive hover>
    <thead>
      <tr>
        <th></th>
        <th>Segunda</th>
        <th>Terça</th>
        <th>Quarta</th>
        <th>Quinta</th>
        <th>Sexta</th>
        <th>Sábado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>7:00</td>
        <td>CrossFit</td>
        <td>CrossFit</td>
        <td>CrossFit</td>
        <td>CrossFit</td>
        <td>CrossFit</td>
        <td>CrossFit</td>
      </tr>
    </tbody>
  </Table>
);

export default tabelaHorario;