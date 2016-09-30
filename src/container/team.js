import React from 'react';

import Teammember from '../component/teammember.js';

let members = [
  {
    img: "http://placehold.it/300x300",
    name: "Caio Rocha",
    title: "Sócio e Coach da CrossFit Ki",
    short: ["Professor da CrossFit Brasil de 2009 a 2016"],
    long: [""]
  },
  {
    img: "http://placehold.it/300x300",
    name: "Fabio Lorençone",
    title: "Coach da CrossFit Ki",
    short: ["CREF: 4607-G/SP", "Graduado pela FEFISA", "CrossFit Level 1 Trainer", "CrossFit Mobility Trainer", "CrossFit Endurance Trainer", "Personal Trainer"],
    long: [""]
  }
];

const Team = () => (
  <div className="container-children">
    <div>
      <h2>Equipe</h2>
      <hr/>
    </div>
    <div className="team">
      {members.map((member, id) => {
        return <Teammember key={id} img={member.img} name={member.name} title={member.title} short={member.short}/>
      })}
    </div>
  </div>
);

export default Team;
