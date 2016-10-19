import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';

const sidebar = (props) => (
  <div className="sidebar">
    <ul>
      <li><a onClick={() => browserHistory.push('/profile')}>profile</a></li>
      <li><a onClick={() => browserHistory.push('/wod')}>wod</a></li>
      <li><a onClick={() => browserHistory.push('/result')}>resultados</a></li>
      <li><a onClick={() => browserHistory.push('/chat')}>chat</a></li>
      <li><a onClick={() => browserHistory.push('/payment')}>pagamento</a></li>
      <li><a onClick={() => browserHistory.push('/checkin')}>checkin</a></li>
    </ul>
  </div>
);

export default sidebar;