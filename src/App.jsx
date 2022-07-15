import { useState } from 'react'
import styled from '@emotion/styled'
import ImageCripto from './assets/imagen-criptos.png'
import Form from './components/Form'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 5rem auto;
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
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 30px;

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
      <Form />
    </div>
    </Contenedor>
  )
}

export default App
