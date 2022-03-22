import React from 'react';
import ReactDOM from 'react-dom';
import BomDia from './components/BomDia'
import Primeiro from './components/Primeiro';
import { BoaTarde, BoaNoite } from './components/Multiplos';

ReactDOM.render(
    <div>
        <BomDia nome={'Rodrigo'} />
        <BoaTarde nome={'Ana'} />
        <BoaNoite nome={'Bia'} />
    </div>,
    document.getElementById('root')
)