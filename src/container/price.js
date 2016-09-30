import React from 'react';

import Pricetable from '../component/pricetable.js';

let prices = [
  {
    individual: false,
    title: 'Mensal',
    quantity: 1,
    priceTag: 360
  },
  {
    individual: false,
    title: 'Trimestral',
    quantity: 3,
    priceTag: 330
  },
  {
    individual: false,
    title: 'Semestral',
    quantity: 6,
    priceTag: 300
  }
];

const Price = () => (
  <div className="container-children">
    <div>
      <h2>Planos e preços</h2>
      <hr/>
      <p>Todos os nossos planos oferecem:</p>
      <ul>
        <li>Número ilimitado de treinos por mês</li>
        <li>Horários e dias flexíveis</li>
        <li>Competições exclusivas para alunos</li>
        <li>Prioridade nos seminários e workshops oferecidos no box</li>
      </ul>
      <p><i>Obs: Preços promocionais válidos para os 50 primeiros alunos que se inscreverem no site</i></p>
    </div>
    <div className="row pricing">
      {prices.map((price, id, arr) => {
        return <Pricetable key={id} id={id} individual={price.individual} length={arr.length} title={price.title} price={price.priceTag}/>
      })}
    </div>
    <hr/>
    <div>
      <h3>Taxa de matrícula</h3>
      <p>Essa taxa se aplica aos <strong>alunos que nunca praticaram CrossFit</strong>.</p>
      <p>O valor da taxa é de R$ 150,00.</p>
      <p>O aluno terá o direito de fazer 5 <i>aulas iniciais<sup>*</sup></i> nas quais, os professores têm como objetivo principal ensinar os movimentos fundamentais para a prática do CrossFit. Sem esses fundamentos, o aluno iniciante não poderá participar das aulas regulares.</p>
    </div>
    <hr/>
    <div>
      <h3>Drop in</h3>
      <p>Para pessoas que já praticam CrossFit em outros boxes e querem conhecer a CrossFit Ki!</p>
    </div>
    <div className="row pricing">
      <div className="col-sm-4 col-sm-offset-4 dropin">
        <Pricetable id={0} individual={true} length={1} title={"Drop in"} price={50}/>
      </div>
    </div>
  </div>
);

export default Price;
