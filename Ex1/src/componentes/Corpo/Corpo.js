import React from 'react'

import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 20vw ;
    h2{
      color: red;
    }
`

export default function corpo(){
    return(
        
        <Container>
            <h2>Sabores: </h2>
                 <li>Morango</li>
                 <li>Chocolate</li>
                 <li>Limão</li>
                 <li>Maracujá</li>
                 <li>Laranja</li>
            <h2>Acompanhamentos: </h2>
                 <li>Granulado</li>
                 <li>Amendoim</li>
                 <li>Coberturas</li>
                 <li>Bis</li>
                 <li>Sonho de valsa</li>
                 <li>Leite condensado</li>   
         </Container>

    )
}

