import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';

import question from '../asset/question.svg';
import calendar from '../asset/calendar.svg';
import weightlifting from '../asset/weightlifting.svg';
import Directions from 'material-ui/svg-icons/maps/directions';

import GoogleMap from 'google-map-react';
import Marker from '../component/marker.js';
import Scheduleform from '../component/scheduleform.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header className="business-header">
          <div className="container-header">
            <div className="text-header">
              <p style={{fontSize: "3em", fontFamily: "Permanent Marker, cursive"}}>Be stronger than your strongest excuse!</p>
            </div>
            <div style={{transform: "translateY(-100%)"}}>
              <RaisedButton
                label="Comece agora"
                primary={true}
                onTouchTap={()=>{
                  browserHistory.push("/aula-experimental");
                }}
              />
            </div>
          </div>
          <div className="layer">
          </div>
        </header>

        <div className="container-children description">
          <h2 className="section-title">VOCÊ ACHA QUE NÃO É CAPAZ?</h2>
          <div className="description-video">
            <div className="description-video-right">
              <div className="videoWrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wRFkD4_y3LE?list=PLdjsnVp4RrE1NcYN9swuhdruJ_F85gwY7" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
            <div className="description-video-left">
              <p>
                Muitas pessoas ainda acreditam que para praticar CrossFit, você precisa ser um atleta de alta performance ou um militar buscando melhorar o seu condicionamento para cumprir as obrigações diárias. Contudo, isso está bem longe da realidade. O CrossFit tem conquistado centenas de milhares de adeptos todos os anos e tem melhorado a qualidade de vida desses praticantes!
              </p>
              <p>
                Um dos principais motivos é a COMUNIDADE que se forma no box. As aulas duram 1 hora e são realizadas sempre em grupos. Participar dessas aulas em grupo, nas quais, os praticantes realizam essa atividade física intensa é algo difícil de se descrever! Além disso, os exercícios são iguais para todos, mas os alunos iniciantes tem algumas adaptações que os permitem acompanhar aqueles alunos mais avançados.
              </p>
              <p>
                Outro motivo para o crescimento é a variedade de treinos que o programa permite. Exercícios de ginástica olímpica, levantamento olímpico e cardiorrespiratórios são a base dos treinos diários, mas um dos pilares do CrossFit é a variação constante dos exercícios para que você não tenha uma rotina previsível de exercícios! Muitos alunos que começam o CrossFit vieram de academias tradicionais e estavam cansados da rotina constante, que os desmotivava e estagnava os seus resultados.
              </p>
            </div>
          </div>

          <hr style={{width:"100%"}}/>

          <div className="firstclass-container">
            <div className="firstclass-content left">
              <div style={{textAlign:"center"}}>
                <h2>CROSSFIT É PARA TODOS</h2>
                <p className="section-title"><b>Preencha o formulário para fazer uma aula experimental.</b></p>
              </div>
              <div style={{textAlign:"justify"}}>
                <p><ActionCheckCircle style={{marginRight: "10px"}}/><b>Aulas para iniciantes</b></p>
                <p>Os alunos iniciantes podem frequentar todas os horários de aula porque temos coaches prontos para iniciar sua jornada no CrossFit.</p>
                <p><ActionCheckCircle style={{marginRight: "10px"}}/><b>Aulas para todas as idades</b></p>
                <p>De crianças até a melhor idade, nossos coaches estão preparados para adaptar todos os exercícios de acordo com as suas restrições.</p>
                <p><ActionCheckCircle style={{marginRight: "10px"}}/><b>Aulas para todos os níveis de condicionamento</b></p>
                <p>Os exercícios para os atletas ou para aqueles que nunca treinaram são os mesmo, mas a intensidade e a carga são adaptadas. Nunca conseguiu fazer academia regularmente? Não tem problema, estamos aqui para mudar isso. Faça uma aula experimental e entenda porque o CrossFit está mudando a vida de tantas pessoas ao redor do mundo!</p>
              </div>
            </div>
            <div className="firstclass-content right">
              <Scheduleform />
            </div>
          </div>

          <hr style={{width:"100%"}}/>

          <div>
            <h2 className="section-title">PRONTO PARA MUDAR SUA VIDA?</h2>
            <p className="section-title"><b>Siga esses 3 passos e comece hoje mesmo.</b></p>
            <div className="steps-wrapper">
              <div className="steps-content">
                <a href="/o-que-e-crossfit">
                  <img style={{width: "50%", display: "block", margin: "0 auto"}} src={question} />
                  <h3>1. O QUE É CROSSFIT?</h3>
                  <p>
                    Tire todas as suas dúvidas sobre esse programa que tem melhorado a qualidade de vida de muitas pessoas ao redor do mundo!
                  </p>
                </a>
              </div>
              <div className="steps-content">
                <a href="/aula-experimental-crossfit">
                  <img style={{width: "50%", display: "block", margin: "0 auto"}} src={calendar} />
                  <h3>2. MARQUE UMA AULA</h3>
                  <p>
                    Sua primeira aula é por nossa conta! Tem algumas coisas que não são fáceis de se explicar, você precisa sentir! Entenda o que é fazer parte dessa comunidade!
                  </p>
                </a>
              </div>
              <div className="steps-content">
                <a href="/blog">
                  <img style={{width: "50%", display: "block", margin: "0 auto"}} src={weightlifting} />
                  <h3>3. TREINE CROSSFIT</h3>
                  <p>
                    Acompanhe diariamente os nossos treinos e melhore a sua qualidade de vida!
                  </p>
                </a>
              </div>
            </div>
          </div>

          <hr style={{width: "100%"}}/>

          <div>
            <h2 className="section-title">LOCALIZAÇÃO</h2>
            <div style={{fontWeight: "bold", textAlign: "center"}}>
              <address>
                Rua Dionísio da Costa, 353<br/>
                Vila Mariana - São Paulo - SP<br/>
                CEP 04117-110<br/>
                <RaisedButton
                  style={{marginTop: "5px"}}
                  href="http://maps.google.com/?q=CrossFit+Ki"
                  label="Google Maps"
                  icon={<Directions />}
                />
              </address>
            </div>
            <div style={{width: "100%", height: "350px"}}>
              <GoogleMap
                apiKey={'AIzaSyAycWQ1YRN1JEHHnW3rRtIfeBWxc9VynnU'}
                center={[-23.589381, -46.625175]}
                zoom={16}
              >
                <Marker
                  lat={-23.589381}
                  lng={-46.625175}
                />
              </GoogleMap>
            </div>
          </div>

          <hr/>

        </div>
      </div>
    );
  }
};

export default Home;
