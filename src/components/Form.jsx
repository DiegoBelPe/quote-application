import React from 'react'
import styled from '@emotion/styled'

const InputSubmit = styled.input`
  background-color: #66a2fe;
  border: none;
  border-radius: 5px;
  color: #FFF;
  width: 100%;
  padding: 10px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  :hover {
    cursor: pointer;
    background-color: #326ac0;
  }

  
`

const Form = () => {
  return (
    <form action="">
      <InputSubmit type="submit" value="Cotizar"/>
    </form>
  )
}

export default Form