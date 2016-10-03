import React from 'react';

const Coach = (props) => (
  <div>
    <div>
      <h2>{props.name}</h2>
      <hr/>
    </div>
    <div className="row">
      <div className="col-md-3">
        <img className="img-responsive img-circle" src={props.img}/>
        <div className="shortCV">
          {props.short.map((line, id)=>{
            return <p key={id}>{line}</p>
          })}
        </div>
      </div>
      <div className="col-md-9">
        <h3 className="member-title">{props.title}</h3>
        <div className="longCV">
          {props.long.map((line, id)=>{
            return <p key={id}>{line}</p>
          })}
        </div>
      </div>
    </div>
    <h3 className="clickable" onClick={() => window.location.href="/equipe"}>Retornar para equipe</h3>
  </div>
);

export default Coach;
