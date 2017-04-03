import React from 'react';

import caioImg from '../asset/caio.jpg';
import maicoImg from '../asset/maico.jpg';
import felipeImg from '../asset/felipe.jpg';

const Team = () => (
  <div>
    <header className="business-header description">
      <div className="container-header">
        <div className="text-header description">
          <p style={{fontSize: "3em", fontFamily: "Permanent Marker, cursive"}}>Equipe</p>
        </div>
      </div>
      <div className="layer">
      </div>
    </header>
    <div className="container-children description">
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{margin: "auto", width: "90%"}}>

          <div className="team-container">
            <div className="team-smaller-col">
              <div className="team-img-container">
                <img src={caioImg} />
              </div>
              <div>
                <ul>
                  <li>Graduado pela UniFMU</li>
                  <li>Pós graduado em Treinamento Desportivo pela UniFMU</li>
                  <li>CrossFit Level 1 Trainer</li>
                  <li>FMS Certified</li>
                </ul>
              </div>
            </div>
            <div className="team-larger-col">
              <h3>Caio Rocha</h3>
              <h4>Sócio e head coach da CrossFit Ki</h4>
              <p>
                Caio foi professor de 2009 a 2016 na CrossFit Brasil, o primeiro box de CrossFit no Brasil.<br/>
                Além de ser um dos professores mais experientes de CrossFit no Brasil, Caio trabalhou com Mônica Pimenta de 2012 a 2016 no Espaço Funcional, a principal referência de Kettlebel no Brasil.<br/>
                Antes disso, trabalhou como coordenador e professor de musculação e treinamento funcional na ÚNICA Academia de 1997 a 2005 com Ricardo e Luciano D'Elia.<br/>
                Ao longo de sua carreira, Caio foi responsável pela preparação de atletas de diversas modalidades, principalmente judô e tênis, e seus atletas representaram o país em muitas competições internacionais.<br/>
                Como competidor do Atletismo, Caio sagrou-se campeão Brasileiro e Sul-Americano.
              </p>
            </div>
          </div>

          <hr style={{margin:"20px"}}/>

          <div className="team-container even">
            <div className="team-smaller-col">
              <div className="team-img-container">
                <img src={maicoImg} />
              </div>
              <div>
                <ul>
                  <li>Em breve</li>
                </ul>
              </div>
            </div>
            <div className="team-larger-col">
              <h3>Maico Schardt</h3>
              <h4>Coach da CrossFit Ki</h4>
              <p>
                Em breve
              </p>
            </div>
          </div>

          <hr style={{margin:"20px"}}/>

          <div className="team-container">
            <div className="team-smaller-col">
              <div className="team-img-container">
                <img src={felipeImg} />
              </div>
              <div>
                <ul>
                  <li>CrossFit Level 1 Trainer</li>
                </ul>
              </div>
            </div>
            <div className="team-larger-col">
              <h3>Felipe Matsumoto</h3>
              <h4>Sócio da CrossFit Ki</h4>
              <p>
                Judoca apaixonado por CrossFit, Felipe começou a treinar em 2009 na CrossFit Brasil depois de um convite do Caio Rocha que havia se tornado professor naquele box.<br/>
                No CrossFit, Felipe encontrou a melhor alternativa para manter o seu condicionamento sem ter que passar horas nas academias tradicionais, atividade que considerava entediante.<br/>
                Outro componente no CrossFit que o atraiu foi a competição. As competições sempre estimulam o atleta a buscar melhores resultados.<br/>
                Como judoca, Felipe foi tri-campeão Paulista, tri-campeão Brasileiro e tri-campeão Sul-Americano.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default Team;
