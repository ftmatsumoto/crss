import React, { Component } from 'react';
import { Button, Collapse, Glyphicon } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';

import EmailForm from './emailform.js';

import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';

import messenger_logo from '../asset/messenger.svg';
import question from '../asset/question.svg';
import calendar from '../asset/calendar.svg';
import weightlifting from '../asset/weightlifting.svg';

import GoogleMap from 'google-map-react';
import Marker from '../component/marker.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
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
              <RaisedButton label="Comece agora" primary={true} />
            </div>
          </div>
          <div className="layer">
          </div>
        </header>

        <div className="container home">
          <div>
            <h2 className="section-title">PRONTO PARA MUDAR SUA VIDA?</h2>
            <p className="section-title"><b>Siga esses 3 passos e comece hoje mesmo.</b></p>
            <div className="steps-wrapper">
              <div className="steps-content">
                <a href="/o-que-e-crossfit">
                  <img style={{width: "50%", display: "block", margin: "0 auto"}} src={question} />
                  <h3>1. O QUE É CROSSFIT?</h3>
                  <p>
                    CrossFit é para todos! Entenda porque o CrossFit conquista praticantes todos os dias!
                  </p>
                </a>
              </div>
              <div className="steps-content">
                <a href="/aula-experimental-crossfit">
                  <img style={{width: "50%", display: "block", margin: "0 auto"}} src={calendar} />
                  <h3>2. MARQUE UMA AULA</h3>
                  <p>
                    Sua primeira aula é por nossa conta! Venha sentir o que é fazer parte dessa comunidade!
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

          <hr/>

          <div>
            <h2 className="section-title">LOCALIZAÇÃO</h2>
            <div style={{fontWeight: "bold", textAlign: "center"}}>
              <address>
                Rua Dionísio da Costa, 353<br/>
                Vila Mariana - São Paulo - SP<br/>
                CEP 04117-110<br/>
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
          <div>
            <h2 className="section-title">CONTATO</h2>

          </div>

          <div className="row last-row">
            <div className="col-sm-12">
              <h2 className="section-title">LOCALIZAÇÃO</h2>
            </div>
            <div className="col-sm-6">
              <p>Venha fazer parte da nossa comunidade!</p>
              <address>
                Rua Dionísio da Costa, 353<br/>
                Klabin - São Paulo<br/>
                Telefone:<br/>
                Fixo: (011) 3280-1716<br/>

              </address>
              <div className="btn-block">
                <Button className="btn btn-default" href="mailto:admin@crossfitki.com.br" block>
                  <Glyphicon glyph="envelope" /> Envie por email
                </Button>
                <Button className="btn btn-default messenger" href="https://m.me/crossfitki" block>
                  <img className="img-messenger" src={messenger_logo}/>
                  <span>Envie pelo Messenger</span>
                </Button>
              </div>
            </div>
            <div className="col-sm-6">
              <h4>Preços promocionais válidos até a data de inauguração do box!</h4>
              <div className="allpages-form">
                <EmailForm />
              </div>
            </div>
          </div>

          <hr/>

        </div>
      </div>
    );
  }
};

export default Home;
