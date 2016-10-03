import React from 'react';
import { browserHistory } from 'react-router';

const teammember = (props) => (
  <div className="row teammember-container clickable" onClick={() => browserHistory.push('/equipe/' + props.link)}>
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