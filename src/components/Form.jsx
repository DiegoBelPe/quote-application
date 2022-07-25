import React from 'react'
import {coins} from '../data/coins'
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

  
  const [SelectMoney] = useSelectMoney("Elige tu moneda", coins)
  
  
  
  return (
    <form action="">
      <SelectMoney />
      <InputSubmit type="submit" value="Cotizar"/>
    </form>
  )
}

export default Form