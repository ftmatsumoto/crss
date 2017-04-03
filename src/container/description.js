import React from 'react';
import { browserHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

import weightlifting from '../asset/weightlifting.svg';
import calendar from '../asset/calendardelete.svg';
import heart from '../asset/humanheartorgan.svg';

const Description = () => (
  <div>
    <header className="business-header description">
      <div className="container-header">
        <div className="text-header description">
          <p style={{fontSize: "3em", fontFamily: "Permanent Marker, cursive"}}>O que é CrossFit?</p>
        </div>
      </div>
      <div className="layer">
      </div>
    </header>
    <div className="container-children description">
      <hr style={{width: "100%"}}/>

      <div className="description-video">
        <div className="description-video-left">
          <p>
            CrossFit foi desenvolvido por Greg Glassman ao longo de décadas. Para Glassman, o termo 'fitness' pode ser mensurado como o aumento da capacidade de trabalho em diversas modalidades e ao longo de diversos intervalos de tempo.
          </p>
          <p>
            CrossFit são movimentos funcionais executados em alta intensidade e variados constantemente. Todos os movimentos do CrossFit são baseados em movimentos funcionais e alguns deles refletem exercícios da ginastica olímpica, levantamento de peso olímpico e cardiorrespiratórios, como corrida e remo. Intensidade é essencial para atingir resultados positivos, quanto mais trabalho em menos tempo, maior é a intensidade do exercício. Variar os exercícios constantemente não permite que seu corpo se adapte a rotina.
          </p>
          <p>
            De modo geral, o objetivo do CrossFit é criar um programa amplo e inclusivo de condicionamento físico usando parâmetros quantificáveis dos seus praticantes. O programa foi desenvolvido para ser escalável para qualquer indivíduo, independentemente de sua experiência prévia com atividades físicas. Nós adaptamos cargas e intensidade, mas não mudamos os treinos. Com isso, o treino de um atleta ou uma pessoa que não pratica nenhum esporte será o mesmo, mas com intensidade e cargas diferentes.
          </p>
        </div>
        <div className="description-video-right">
          <div className="videoWrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mlVrkiCoKkg" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <hr style={{width: "100%"}}/>

      <div className="description-images">
        <div className="steps-wrapper">
          <div className="steps-content description">
            <div>

            <img style={{width: "80%", display: "block", margin: "0 auto"}} src={weightlifting} />
            </div>
            <div>

            <h3>EXERCÍCIOS FUNCIONAIS</h3>
            <p style={{textAlign: "justify"}}>
              Exercícios funcionais são aqueles movimentos que te preparam para a vida fora do box. Agachar, correr, saltar, arremessar, puxar, levantar objetos do chão. Os exercícios do CrossFit usam esses movimentos porque eles são muito mais eficientes para nos condicionar para nossas atividades do dia a dia.
            </p>
            </div>
          </div>
          <div className="steps-content description">
            <div>

            <img style={{width: "80%", display: "block", margin: "0 auto"}} src={calendar} />
            </div>
            <div>

            <h3>VARIAÇÃO CONSTANTE</h3>
            <p style={{textAlign: "justify"}}>
              Variar os exercícios constantemente faz parte do programa da CrossFit. A rotina dos exercícios é seu inimigo, ou seja, quanto mais consistente for sua rotina de exercícios, menos preparado você estará para outras atividades. Situações inesperadas no mundo real podem ocorrer com todos e seus exercícios deveriam refletir isso.
            </p>
            </div>
          </div>
          <div className="steps-content description">
            <div>

            <img style={{width: "80%", display: "block", margin: "0 auto"}} src={heart} />
            </div>
            <div>

            <h3>ALTA INTENSIDADE</h3>
            <p style={{textAlign: "justify"}}>
              Intensidade é uma medida da física e é um elemento chave para medir o condicionamento físico. Intensidade é definido como trabalho realizado dividido pelo tempo para executá-lo. Uma corrida leve é facil e de baixa intensidade, uma corrida na velocidade máxima que você consegue atingir é mais difícil e de alta intensidade. Esse tipo de intensidade gera melhores resultados.
            </p>
            </div>
          </div>
        </div>
      </div>

      <hr style={{marginTop:"20px", width: "100%"}}/>

      <div style={{display: "flex"}}>
        <RaisedButton
          label="Comece agora"
          primary={true}
          style={{margin: "auto"}}
          onTouchTap={() => {
            browserHistory.push("/aula-experimental");
          }}
        />
      </div>
    </div>

  </div>
);

export default Description;
