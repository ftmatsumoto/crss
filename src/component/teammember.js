import React from 'react';

const teammember = (props) => (
  <div className="row">
    <div className="col-sm-3">
      <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt={props.img}/>
    </div>
    <div className="col-sm-9 container-text-teammember">
      <div className="text-teammember">
        <h2>{props.name}</h2>
        <p>
          {props.content}
        </p>
      </div>
    </div>
  </div>
);

export default teammember;