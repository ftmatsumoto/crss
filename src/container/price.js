import React from 'react';

import Pricetable from '../component/pricetable.js';

let prices = [
  {
    title: 'DROP-IN',
    content: 'conteudo do drop-in',
    priceTag: 50
  },
  {
    title: 'MENSAL',
    content: 'conteudo do pacote mensal',
    priceTag: 400
  },
  {
    title: 'TRIMESTRAL',
    content: 'conteudo do pacote trimestral',
    priceTag: 350
  },
  {
    title: 'SEMESTRAL',
    content: 'conteudo do pacote semestral',
    priceTag: 320
  }
];

const Price = () => (
  <div className="container-children">
    <div className="row">
      {prices.map((price, id) => {
        return <Pricetable key={id} title={price.title} content={price.content} price={price.priceTag}/>
      })}
    </div>
  </div>
);

export default Price;
