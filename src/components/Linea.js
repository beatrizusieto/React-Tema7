import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.p`
display: flex;
align-items: center;
padding: 10px 10px;
background: papayawhip;
color: black;
`;

const Icon = styled.svg`
display: flex;
align-items: center;
width: 48px;
height: 48px;
padding: 0px 10px; 
`;

class Linea extends Component
{
 
  
render()
{
  
  return <div>
             <Text>
             <Icon viewBox="0 0 20 20">
             <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z"/></Icon>
             <p style={{background: this.props.lineaAct.color}} key={this.props.lineaAct.id}>
               {this.props.lineaAct.frase} 
             </p> 
             </Text>
        </div>
}

}

export default Linea;