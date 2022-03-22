import React from 'react';
import ReactDOM from 'react-dom';
//import BomDia from './components/BomDia'
//import { BoaTarde, BoaNoite } from './components/Multiplos';
//import Saudacao from './components/Saudacao';
import Pai from './components/Pai';
import Filho from './components/Filho';

ReactDOM.render(
    <div>
        <Pai nome={'Paulo'} sobrenome={'Silva'}>
            <Filho nome={'Pedro'} />
            <Filho nome={'Paulo'} />
            <Filho nome={'Carla'} />
        </Pai>
    </div>,
    document.getElementById('root')
)