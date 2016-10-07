import React from 'react';
import { browserHistory } from 'react-router';

const Profile = (props) => (
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
    <h3 className="clickable" onClick={() => browserHistory.push('/equipe')}>Retornar para equipe</h3>
  </div>
);

export default Profile;
