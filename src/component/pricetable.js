import React from 'react';

const pricetable = (props) => (
  <div>
    <div>{props.title}</div>
    <div>{props.content}</div>
    <div>{props.price}</div>
  </div>
);

export default pricetable;
