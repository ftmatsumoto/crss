import React from 'react';
import Timetable from '../component/timetable.js';

const Schedule = () => (
  <div className="container-children">
    <div>
      <h2>Horários</h2>
      <hr/>
    </div>
    <Timetable/>
    <div>
      <p><i><sup>*</sup>Os horários para iniciantes podem mudar de acordo com a demanda por aulas regulares.</i></p>
    </div>
  </div>
);

export default Schedule;
