import React from 'react'
import styled from '@emotion/styled'
import useSelectMoney from '../hooks/useSelectMoney'

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
  const [SelectMoney] = useSelectMoney("Elige tu moneda")
  const [CriptoMoney] = useSelectMoney("Elige tu criptomoneda")
  
  
  return (
    <form action="">
      <SelectMoney />
      <CriptoMoney />
      <InputSubmit type="submit" value="Cotizar"/>
    </form>
  )
}

export default Form