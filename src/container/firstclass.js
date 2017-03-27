import React from 'react';
import Scheduleform from '../component/scheduleform.js';
import emailForm from './emailform.js';

const Firstclass = () => (
  <div>
    <header className="business-header description">
      <div className="container-header">
        <div className="text-header description">
          <p style={{fontSize: "3em", fontFamily: "Permanent Marker, cursive"}}>Aula experimental</p>
        </div>
      </div>
      <div className="layer">
      </div>
    </header>
    <div className="firstclass-container">
      <div className="firstclass-content left">
        <div style={{textAlign:"center"}}>
          <h2>A AULA EXPERIMENTAL É POR NOSSA CONTA</h2>
        </div>
        <hr/>
        <div style={{textAlign:"justify"}}>
          <p>Nós queremos que você faça parte dessa comunidade! Não fique inseguro em começar algo novo sem saber o que te espera, nós estamos aqui para tirar todas as suas dúvidas. Nós queremos que você visite nosso box pessoalmente, conheça os coaches e se familiarize com os exercícios do CrossFit.</p>
          <p>Nossa aula experimental é GRÁTIS! Preencha o formulário para marcar o dia e horário que você tem disponível para começar a treinar!</p>
          <p>Qualquer dúvida, entre em contato por email, telefone ou Facebook Messenger.</p>
        </div>
      </div>
      <div className="firstclass-content right">
        <Scheduleform />
      </div>
    </div>
  </div>
);

export default Firstclass;
