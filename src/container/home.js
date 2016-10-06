import React, { Component } from 'react';
import { Button, Collapse, Glyphicon } from 'react-bootstrap';

import messenger_logo from '../asset/facebook-messenger-white.svg';
import Timer from '../component/timer.js';
import CarouselInst from '../component/carousel.js';
import EmailForm from './emailform.js';

const month = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const weekday = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: new Date('Oct 29 2016 10:00:00 GMT-0300'),
      open: false
    };
  }

  setCurrTime() {
    this.setState({
      currTime: new Date(),
      t: setTimeout(this.setCurrTime.bind(this), 500)
    }, this.setDiff());
  }

  setDiff() {
    let daysF = (this.state.deadline - this.state.currTime) / (1000 * 60 * 60 * 24);
    let days = Math.floor(daysF);
    let hoursF = (daysF - days) * 24;
    let hours = Math.floor(hoursF);
    let minsF = (hoursF - hours) * 60;
    let mins = Math.floor(minsF);
    let secsF = (minsF - mins) * 60;
    let secs = Math.floor(secsF);

    this.setState({
      days: days,
      hours: hours,
      mins: mins,
      secs: secs
    });
  }

  componentWillMount() {
    this.setCurrTime();
  }

  componentWillUnmount() {
    clearTimeout(this.state.t);
  }

  render() {
    return (
      <div>
        <header className="business-header">
          <div className="container-header">
            <div className="text-header">
              <div className="row" style={{visibility: "hidden"}}>
                <div className="col-md-12">
                  <h3 style={{margin: "10px 0 0 0"}}>Faltam</h3>
                  <Timer days={this.state.days} hours={this.state.hours} mins={this.state.mins} secs={this.state.secs} deadline={this.state.deadline}/>
                </div>
              </div>
              <h2>{/*Inauguração no dia {this.state.deadline.getDate()} de {month[this.state.deadline.getMonth()]} ({weekday[this.state.deadline.getDay()]})!*/}Estamos chegando!</h2>
              <div className="allpages-form" style={{padding: "20px 0 10px 0", maxWidth: "400px", minWidth: "300px", margin:"auto", color: "black", textShadow: "0 0 0"}}>
                <EmailForm />
              </div>
            </div>
          </div>
          <div className="layer">
          </div>
        </header>

        <div className="container home">
          <hr/>

          <div className="row">
            <div className="col-sm-12">
              <h2 className="section-title">O que é CrossFit?</h2>
            </div>
            <div className="col-sm-6">
              <p>CrossFit é um método de treinamento desenvolvido por Greg Glassman com o objetivo de melhorar a capacidade física e a saúde dos praticantes. No CrossFit, os atletas realizam movimentos funcionais variados em alta intensidade. Muitos exercícios são baseados em movimentos utilizados em outros esportes como ginástica olímpica, levantamento olímpico, corrida, remo e outros.</p>
              <Button className="home-btn" onClick={ ()=> this.setState({ open: !this.state.open })}>
                Saiba mais
              </Button>
              <Collapse in={this.state.open}>
                <div>
                  <p>Outro componente fundamental que diferencia o CrossFit é o formato das aulas. As aulas são realizadas em grupo e esse formato propicia um ambiente amigavel e estimulante para os praticantes, mesmo aqueles que não estão acostumados com o esporte. Assim, cada atleta faz o exercício de acordo com a sua capacidade física, se desafiando a cada treino. Isso fez com que uma grande comunidade surgisse em torno do esporte em um curto espaço de tempo. Hoje, existem mais de 11.000 boxes oficiais espalhados pelo mundo.</p>
                </div>
              </Collapse>
            </div>
            <div className="col-sm-6">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/mlVrkiCoKkg" allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>

          <hr/>

          <div className="row">
            <div className="col-sm-6 col-sm-offset-6">
              <h2 className="section-title">CrossFit Ki</h2>
            </div>
            <div className="col-sm-6">
              <CarouselInst />
            </div>
            <div className="col-sm-6">
              <p>
                Ki é a energia vital presente em nossos corpos. Esse termo tem sua origem em países asiáticos como China, Índia e Japão.
              </p>
              <p>
                Acreditamos que a energia da Crossfit vem da sua incrível comunidade e queremos estimular isso em nossos atletas!
              </p>
              <p>
                Para concretizarmos isso, contamos com professores muito experientes e instalações modernas com os melhores equipamentos disponíveis no mercado para a pratica do esporte.
              </p>
            </div>
          </div>

          <hr/>

          <div className="row last-row">
            <div className="col-sm-12">
              <h2 className="section-title">Treine conosco</h2>
            </div>
            <div className="col-sm-6">
              <p>Venha fazer parte da nossa comunidade!</p>
              <address>
                Rua Dionísio da Costa, 353<br/>
                Klabin - São Paulo<br/>
                tel: (011) 3280-1716<br/>
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

          <footer>
            <div className="row">
              <div className="col-sm-12">
                <p>Copyright &copy; CrossFit Ki 2016</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
};

export default Home;
