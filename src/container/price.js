import React from 'react';
import { browserHistory } from 'react-router';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const Price = () => (
  <div>
    <header className="business-header description">
      <div className="container-header">
        <div className="text-header description">
          <p style={{fontSize: "3em", fontFamily: "Permanent Marker, cursive"}}>Planos e aulas avulsas</p>
        </div>
      </div>
      <div className="layer">
      </div>
    </header>
    <div className="container-children description">
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{margin: "auto", width: "90%"}}>
          <h3>Nossos planos</h3>
          <p>
            Em todos os planos, os alunos podem frequentar qualquer horário de treino. Escolha o plano que melhor se ajusta as suas necessidade e comece agora!
          </p>
        </div>
        <div className="price-container">
          <Paper zDepth={2} className="price-table" style={{backgroundColor:"rgb(232,232,232)"}}>
            <div className="price-table-header">Mensal</div>
            <div className="price-table-pricetag">
              <div>R$ 360 <span>/mês</span></div>
            </div>
            <div className="price-table-benefits">
              <div>Sem limite de aulas no mês</div>
              <Divider style={{backgroundColor:"rgb(200,200,200)"}}/>
            </div>
            <div className="price-table-button">
              <RaisedButton label="Comece agora" onTouchTap={() => browserHistory.push("/aula-experimental")} primary={true} style={{margin: "auto"}}/>
            </div>
          </Paper>
          <Paper zDepth={2} className="price-table" style={{backgroundColor:"rgb(232,232,232)"}}>
            <div className="price-table-header">Trimestral</div>
            <div className="price-table-pricetag">
              <div>R$ 330 <span>/mês</span></div>
            </div>
            <div className="price-table-benefits">
              <div>Sem limite de aulas no mês</div>
              <Divider style={{backgroundColor:"rgb(200,200,200)"}}/>
              <div>Descontos no pagamento à vista</div>
              <Divider style={{backgroundColor:"rgb(200,200,200)"}}/>
              <div>Possibilidade de trancar o plano<sup>*</sup></div>
            </div>
            <div className="price-table-button">
              <RaisedButton label="Comece agora" onTouchTap={() => browserHistory.push("/aula-experimental")} primary={true} style={{margin: "auto"}}/>
            </div>
          </Paper>
          <Paper zDepth={2} className="price-table" style={{backgroundColor:"rgb(232,232,232)"}}>
            <div className="price-table-header">Semestral</div>
            <div className="price-table-pricetag">
              <div>R$ 300 <span>/mês</span></div>
            </div>
            <div className="price-table-benefits">
              <div>Sem limite de aulas no mês</div>
              <Divider style={{backgroundColor:"rgb(200,200,200)"}}/>
              <div>Descontos no pagamento à vista</div>
              <Divider style={{backgroundColor:"rgb(200,200,200)"}}/>
              <div>Possibilidade de trancar o plano<sup>*</sup></div>
            </div>
            <div className="price-table-button">
              <RaisedButton label="Comece agora" onTouchTap={() => browserHistory.push("/aula-experimental")} primary={true} style={{margin: "auto"}}/>
            </div>
          </Paper>
        </div>
        <Divider style={{marginTop:"50px"}}/>
        <div style={{margin: "auto", width: "90%"}}>
          <h3>Aulas avulsas</h3>
          <p>
            Alunos que já treinam CrossFit podem comprar pacotes de aulas avulsas!
          </p>
        </div>
        <div className="price-container">
          <Paper zDepth={2} className="price-table dropin" style={{backgroundColor:"rgb(232,232,232)"}}>
            <div className="price-table-header">Aula avulsa</div>
            <div className="price-table-pricetag">
              <div>R$ 35 <span>/aula</span></div>
            </div>
            <div className="price-table-benefits">
              <div>Sem restrições de horários</div>
              <Divider style={{backgroundColor:"rgb(200,200,200)"}}/>
            </div>
            <div className="price-table-button">
              <RaisedButton label="Comece agora" onTouchTap={() => browserHistory.push("/aula-experimental")} primary={true} style={{margin: "auto"}}/>
            </div>
          </Paper>
          <Paper zDepth={2} className="price-table dropin" style={{backgroundColor:"rgb(232,232,232)"}}>
            <div className="price-table-header">Aula avulsa</div>
            <div className="price-table-pricetag">
              <div>R$ 300 <span>/10 aulas</span></div>
            </div>
            <div className="price-table-benefits">
              <div>Sem restrições de horários</div>
              <Divider style={{backgroundColor:"rgb(200,200,200)"}}/>
              <div>Aulas avulsas não expiram</div>
            </div>
            <div className="price-table-button">
              <RaisedButton label="Comece agora" onTouchTap={() => browserHistory.push("/aula-experimental")} primary={true} style={{margin: "auto"}}/>
            </div>
          </Paper>

        </div>
        <Divider style={{marginTop:"50px"}}/>
        <div style={{margin: "auto", width: "90%"}}>
          <h3>Taxa de matrícula</h3>
          <p>
            Alunos que ainda não treinam CrossFit pagam uma taxa de matrícula de R$ 150 e devem fazer 3 aulas fundamentais. Essas aulas acontecem nos mesmos horários das aulas regulares.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Price;
