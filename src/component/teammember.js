import React from 'react';
import { Link } from 'react-router';

const teammember = (props) => (
  <div className="row teammember-container clickable" onClick={() => window.location.href="/equipe/" + props.link}>
    <div className="col-md-3 teammember-img">
      <img className="img-responsive img-circle" src={props.img}/>
    </div>
    <div className="col-md-9 teammember-text">
      <h3 className="member-name">{props.name}</h3>
      <p className="member-title">{props.title}</p>
    </div>
  </div>
);

export default teammember;