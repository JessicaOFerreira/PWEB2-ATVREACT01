import React from 'react';
import Weak from './Weak';
import Caps from './Caps';
import TextBlue from './TextBlue';


export default class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Atividade 01 PWEB2</h1>
        <h2>Aplicação de Componentes</h2>

        <strong>-Componente Weak:</strong>
        <p><Weak>Deixa o texto em itálico, com fonte monospaçada e tamanho 0.8em;</Weak></p>
        
        <strong>-Componente Caps:</strong>
        <p><Caps>Transforma todo o texto dentro dele em maíusculo.</Caps></p>

        <strong>-Componente TextBlue:</strong>
        <p><TextBlue>Transforma todo o texto sem seu interior na cor escolhida.</TextBlue></p>
    </div>
    );
  }
}
