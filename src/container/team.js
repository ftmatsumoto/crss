import React from 'react';

import Teammember from '../component/teammember.js';

let members = [
  {
    img: "Caio",
    name: "Caio Rocha",
    title: "Sócio e Coach da CrossFit Ki",
    content: []
  },
  {
    img: "Fabio",
    name: "Fabio Lorençone",
    title: "Coach da CrossFit Ki",
    content: ["CREF: 4607-G/SP", "Graduado pela FEFISA", "CrossFit Level 1 Trainer", "CrossFit Mobility Trainer", "CrossFit Endurance Trainer", "Personal Trainer"]
  }
];

const Team = () => (
  <div className="container-children team">
    {members.map((member, id) => {
      return <Teammember key={id} img={member.img} name={member.name} title={member.title} content={member.content}/>
    })
    }
  </div>
);

export default Team;
