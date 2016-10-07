import React from 'react';
import { browserHistory } from 'react-router';

/*onClick={() => browserHistory.push('/registration')}*/
const pricetable = (props) => (
  <div className={"col-sm-" + 12/props.length + " pricing-table " + (props.id % 2 === 0 ? "even" : "odd")}>
    <div className="pricing-header">
      <h3 className="pricing-title">{props.title}</h3>
      <p className="pricing-rate">R$ <span>{props.price}</span><sup>{props.individual ? "" : "*"}</sup></p>
      <p className="pricing-freq"><span>por </span>{props.individual ? "treino" : "mês"}</p>
      <div className="pricing-cta"><a href="#">Comece agora</a></div>
    </div>
  </div>
);

export default pricetable;
