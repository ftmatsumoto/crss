import React from 'react';

import Teammember from '../component/teammember.js';

let members = [
  {
    img: "Caio",
    name: "Caio Rocha",
    content: "Coach CrossFit Ki"
  },
  {
    img: "Fabio",
    name: "Fabio",
    content: "Coach CrossFit Ki"
  }
];

const Team = () => (
  <div className="container-children team">
    {members.map((member, id) => {
      return <Teammember key={id} img={member.img} name={member.name} content={member.content}/>
    })
    }
  </div>
);

export default Team;
