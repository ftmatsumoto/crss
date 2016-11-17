import React from 'react';

import Pricetable from '../component/pricetable.js';

let prices = [
  {
    individual: false,
    title: 'Mensal',
    quantity: 1,
    priceTag: 360,
    link: 'https://pag.ae/bdfg9vn'
  },
  {
    individual: false,
    title: 'Trimestral',
    quantity: 3,
    priceTag: 330,
    link: 'https://pag.ae/bgfg9xY'
  },
  {
    individual: false,
    title: 'Semestral',
    quantity: 6,
    priceTag: 300,
    link: 'https://pag.ae/bbfgXCv'
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
    </div>
    <div className="row pricing">
      {prices.map((price, id, arr) => {
        return <Pricetable key={id} id={id} individual={price.individual} length={arr.length} title={price.title} price={price.priceTag} link={price.link}/>
      })}
    </div>
    <p><i><sup>*</sup>Obs: Preços promocionais válidos para os alunos que se cadastrarem antes da inauguração do box! Cadastre-se agora!</i></p>
    <hr/>
    <div>
      <h3>Taxa de matrícula</h3>
      <p>Essa taxa se aplica aos <strong>alunos que nunca praticaram CrossFit</strong>.</p>
      <p>O valor da taxa é de R$ 150,00.</p>
      <p>O aluno terá o direito de fazer 3 <i>aulas fundamentais<sup>*</sup></i> nas quais, os professores ensinam os principais movimentos para a prática do CrossFit. Sem esses fundamentos, o aluno iniciante não poderá participar das aulas regulares.</p>
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
