import React from 'react'
import styled from 'styled-components'
import Cabecalho from './componentes/Cabecalho/Cabecalho'
import Corpo from './componentes/Corpo/Corpo'
import Rodape from './componentes/Rodape/Rodape'

export const Container = styled.div`
  margin: 0 20vw ;
  background-color: #d3d3d3;
  height: 500px;
`

export default function App(){
    return(
        <Container id="container">
            <Cabecalho/>
            <Corpo/>
            <Rodape/>
        </Container>
    )
}