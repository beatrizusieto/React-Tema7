import React, { Component } from 'react';
import Linea from './Linea';

class Texto extends Component
{
    render()
    {
       return this.props.texto.map( linea => 
            <div>
               <Linea lineaAct={linea} key={this.props.texto.id} />
            </div>
       );
       
       
    }
}

export default Texto;