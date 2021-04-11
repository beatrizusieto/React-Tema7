import React, { useState } from 'react';
import './App.css';
import teatro from './sample/teatro.json';
import styled, {css} from 'styled-components';
import Texto from './components/Texto';

const Button = styled.button`;  
  background: transparent;
  border-radius: 3px;
  border: 2px solid red;
  color: red;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
 

  ${props =>
    props.primary &&
    css`
      background: red;
      color: white;
    `}
  ;
`
const Wrapper = styled.section`
  margin: 4em;
  padding: 4em;
  background: lightgrey;
`;

function App() {

  const [indice, setIndice] = useState(0)
    

  function anterior() 
  {
        if((indice) > 0 && (indice < teatro.length) )
        {
          setIndice(prevIndice => prevIndice - 1)
        }

      
  }

  function seguent () 
  {
    
    if((indice >= 0) && (indice < teatro.length-1))
    {
      setIndice(prevIndice => prevIndice + 1)
    }
  }

  function refrescar () 
  {
        teatro.map( linea => {
  
        if( linea.id === indice )
        {
          linea.color= 'pink'
        }
        else
        {
          linea.color= 'papayawhip'
        }
        return linea;
      });
  
      
  }
    refrescar()
    return(
        <div className="App">
            <Wrapper>
            <Button primary onClick={anterior}>Anterior</Button><Button primary onClick={seguent}>Seguent</Button>
            <br/>
            <Texto texto={teatro} />
            </Wrapper> 
        </div>
      )
  
} 


export default App;
