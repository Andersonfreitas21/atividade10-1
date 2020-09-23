import React from 'react';
import ReactDOM from 'react-dom';
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
import './index.css';

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" />
      <Filho nome="Rafael" />
      <Filho nome="Rodrigo" />
    </Pai>
  </div>,
  document.getElementById('root')
);


