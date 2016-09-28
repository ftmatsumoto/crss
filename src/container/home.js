import React, { Component } from 'react';
import Timer from '../component/timer.js';
import messenger_logo from '../asset/facebook-messenger-white.svg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: new Date("Sep 29 2016 14:00:00 GMT-0200")
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
        <header className="business-header" id="particles-js">
          <div className="container container-header">
            <h2 className="text-header">CrossFit Ki</h2>
            <div className="text-header">
              <div className="row">
                <div className="col-lg-12">
                  <Timer days={this.state.days} hours={this.state.hours} mins={this.state.mins} secs={this.state.secs} deadline={this.state.deadline}/>
                </div>
              </div>
            </div>
          </div>
          <div className="layer">
          </div>
        </header>

        <div className="container">
          <hr/>

          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title">O que é CrossFit?</h2>
            </div>
            <div className="col-lg-6">
              <p>CrossFit é um método de treinamento desenvolvido por Greg Glassman com o objetivo de melhorar a capacidade física e a saúde dos praticantes. No CrossFit, os atletas realizam movimentos funcionais variados em alta intensidade. Muitos exercícios são baseados em movimentos utilizados em outros esportes como ginástica olímpica, levantamento olímpico, corrida, remo e outros.</p>
              <p>Outro componente fundamental que diferencia o CrossFit é o formato das aulas. As aulas são realizadas em grupo e esse formato propicia um ambiente amigavel e estimulante para os praticantes, mesmo aqueles que não estão acostumados com o esporte. Assim, cada atleta faz o exercício de acordo com a sua capacidade física, se desafiando a cada treino. Isso fez com que uma grande comunidade surgisse em torno do esporte em um curto espaço de tempo. Hoje, existem mais de 11.000 boxes oficiais espalhados pelo mundo.</p>
            </div>
            <div className="col-lg-6">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/mlVrkiCoKkg" allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>

          <hr/>

          <div className="row">
            <div className="col-lg-6 col-lg-offset-6">
              <h2 className="section-title">CrossFit Ki</h2>
            </div>
            <div className="col-lg-6">
              <img className="img-responsive img-home" src="http://placehold.it/350x200"/>
            </div>
            <div className="col-lg-6">
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

          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title">Treine conosco</h2>
            </div>
            <div className="col-lg-6">
              <p>Venha fazer parte da nossa comunidade!</p>
              <address>
                Rua Dionísio da Costa, 353<br/>
                Klabin - São Paulo<br/>
                tel: (011) 3280-1716<br/>
                email: <a href="mailto:admin@crossfitki.com.br">admin@crossfitki.com.br</a>
              </address>
              <a href="https://m.me/crossfitki" className="btn btn-default messenger">
                <img className="img-messenger" src={messenger_logo}/>
                <span>Envie pelo Messenger</span>
              </a>
            </div>
            <div className="col-lg-6">
              <div>
                <Timer days={this.state.days} hours={this.state.hours} mins={this.state.mins} secs={this.state.secs} deadline={this.state.deadline}/>
              </div>
            </div>
          </div>

          <hr/>

          <footer>
            <div className="row">
              <div className="col-lg-12">
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
