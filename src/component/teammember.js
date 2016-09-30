import React from 'react';

const teammember = (props) => (
  <div className="row teammember-container">
    <div className="col-md-3 teammember-img">
      <img className="img-responsive" src={props.img}/>
    </div>
    <div className="col-md-9 teammember-text">
      <h3 className="member-name">{props.name}</h3>
      <p className="member-title">{props.title}</p>
      <p className="member-short">
        {props.short.map((line, id)=>{
          return <p>{line}</p>
        })}
      </p>
    </div>
  </div>
);

export default teammember;