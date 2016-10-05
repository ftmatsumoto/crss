import React from 'react';

const Timer = (props) => (
  <div className="container-timer">
    <div className="row timer">
      <div className="col-xs-3">
        <div className="timer-number">
          <div className="timer-digit">
            <h2>{("0" + props.days).slice(-2,-1)} {("0" + props.days).slice(-1)}</h2>
          </div>
          <div className="timer-text">
            <p>Dias</p>
          </div>
        </div>
      </div>
      <div className="col-xs-3">
        <div className="timer-number">
          <div className="timer-digit">
            <h2>{("0" + props.hours).slice(-2,-1)} {("0" + props.hours).slice(-1)}</h2>
          </div>
          <div className="timer-text">
            <p>Horas</p>
          </div>
        </div>
      </div>
      <div className="col-xs-3">
        <div className="timer-number">
          <div className="timer-digit">
            <h2>{("0" + props.mins).slice(-2,-1)} {("0" + props.mins).slice(-1)}</h2>
          </div>
          <div className="timer-text">
            <p>Minutos</p>
          </div>
        </div>
      </div>
      <div className="col-xs-3">
        <div className="timer-number">
          <div className="timer-digit">
            <h2>{("0" + props.secs).slice(-2,-1)} {("0" + props.secs).slice(-1)}</h2>
          </div>
          <div className="timer-text">
            <p>Segundos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Timer;
