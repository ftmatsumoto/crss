import React from 'react';
const month = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const weekday = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

    // <p> Estamos preparando um evento para inauguração do box. <br/>
      // Se você tiver interesse em receber mais informações, cadastre seu email:
    // </p>
    // Data da inauguração: {props.deadline.getDate() + "/" + month[props.deadline.getMonth()] + "/" + props.deadline.getFullYear()}

const Timer = (props) => (
  <div className="container-timer">
    <div className="row timer">
      <div className="col-xs-3">
        <div className="timer-number">
          <div className="timer-digit">
            <h2>{("0" + props.days).slice(-2,-1)} {("0" + props.days).slice(-1)}</h2>
          </div>
          <div className="timer-text">
            <p>dias</p>
          </div>
        </div>
      </div>
      <div className="col-xs-3">
        <div className="timer-number">
          <div className="timer-digit">
            <h2>{("0" + props.hours).slice(-2,-1)} {("0" + props.hours).slice(-1)}</h2>
          </div>
          <div className="timer-text">
            <p>horas</p>
          </div>
        </div>
      </div>
      <div className="col-xs-3">
        <div className="timer-number">
          <div className="timer-digit">
            <h2>{("0" + props.mins).slice(-2,-1)} {("0" + props.mins).slice(-1)}</h2>
          </div>
          <div className="timer-text">
            <p>minutos</p>
          </div>
        </div>
      </div>
      <div className="col-xs-3">
        <div className="timer-number">
          <div className="timer-digit">
            <h2>{("0" + props.secs).slice(-2,-1)} {("0" + props.secs).slice(-1)}</h2>
          </div>
          <div className="timer-text">
            <p>segundos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Timer;
