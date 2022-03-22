import React from 'react';
import ReactDOM from 'react-dom';
import BomDia from './components/BomDia'
import { BoaTarde, BoaNoite } from './components/Multiplos';
import Saudacao from './components/Saudacao';

ReactDOM.render(
    <div>
        <Saudacao 
            tipo={'Bom dia'}
            nome={'João'}
        />
    </div>,
    document.getElementById('root')
)