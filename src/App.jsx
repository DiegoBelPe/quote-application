import { useState } from 'react'
import styled from '@emotion/styled'
import ImageCripto from './assets/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

`
const Image = styled.img`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
`

const Heading = styled.h1`
  font-family: 'lato', sans-serif;
  color: #fff;

`

function App() {

  return (
    <Contenedor>
    <Image 
      src={ImageCripto} 
      alt="imagen cripto"
    />
    <div>
      <Heading>Cotizador de criptomonedas</Heading>
    </div>
    </Contenedor>
  )
}

export default App
