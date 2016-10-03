import React, { Component } from 'react';

import Teammember from '../component/teammember.js';
import Profile from '../container/profile.js';
import caioImg from '../asset/caio.jpg';
import fabioImg from '../asset/fabio.jpg';
import felipeImg from '../asset/felipe.jpg';

let members = [
  {
    img: caioImg,
    link: 'caio',
    name: 'Caio Rocha',
    title: 'Sócio e head coach da CrossFit Ki',
    short: ['Graduado pela UniFMU', 'Pós graduado em Treinamento Desportivo pela UniFMU', 'CrossFit Level 1 Trainer','FMS Certified'],
    long: ['Caio foi professor de 2009 a 2016 na CrossFit Brasil, o primeiro box de CrossFit no Brasil.', 'Além de ser um dos professores mais experientes de CrossFit no Brasil, Caio trabalhou com Mônica Pimenta de 2012 a 2016 no Espaço Funcional, a principal referência de Kettlebel no Brasil.', 'Antes disso, trabalhou como coordenador e professor de musculação e treinamento funcional na ÚNICA Academia de 1997 a 2005 com Ricardo e Luciano D\'Elia.', 'Ao longo de sua carreira, Caio foi responsável pela preparação de atletas de diversas modalidades, principalmente judô e tênis, e seus atletas representaram o país em muitas competições internacionais.', 'Como competidor do Atletismo, Caio sagrou-se campeão Brasileiro e Sul-Americano.']
  },
  {
    img: fabioImg,
    link: 'fabio',
    name: 'Fabio Lorençone',
    title: 'Coach da CrossFit Ki',
    short: ['CREF: 4607-G/SP', 'Graduado pela FEFISA', 'CrossFit Level 1 Trainer', 'CrossFit Mobility Trainer', 'CrossFit Endurance Trainer'],
    long: ['']
  },
  {
    img: felipeImg,
    link: 'felipe',
    name: 'Felipe Matsumoto',
    title: 'Sócio da CrossFit Ki',
    short: [''],
    long: ['Judoca apaixonado por CrossFit, Felipe começou a treinar em 2009 na CrossFit Brasil depois de um convite do Caio Rocha que havia se tornado professor naquele box.', 'No CrossFit, Felipe encontrou a melhor alternativa para manter o seu condicionamento sem ter que passar horas nas academias tradicionais, atividade que considerava entediante.', 'Outro componente no CrossFit que o atraiu foi a competição. As competições motivam o atleta a buscar melhores resultados continuamente.', 'Como judoca, Felipe foi tri-campeão paulista, tri-campeão Brasileiro e tri-campeão Sul-Americano.']
  }
];

class Team extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    let team = (
      <div>
        <div>
          <h2>Equipe</h2>
          <hr/>
        </div>
        <div className="team">
          {members.map((member, id) => {
            return <Teammember key={id} img={member.img} name={member.name} title={member.title} link={member.link}/>
          })}
        </div>
      </div>
    );

    if (!this.props.children) {
      return <div className="container-children">{team}</div>
    } else {
      let profile = members.reduce((result, member) => {
        if (member.link === this.props.params.profile) {
          result.push(member);
        }
        return result;
      },[]);
      return <div className="container-children"><Profile name={profile[0].name} img={profile[0].img} title={profile[0].title} short={profile[0].short} long={profile[0].long}/></div>
    }
  }
}

export default Team;
