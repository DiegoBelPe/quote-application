import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: white;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;

`
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;


`


const useSelectMoney = (label, opciones) => {
  
  const SelectMoney = () => (
    <>
      <Label>{label}</Label>
      <Select>
        <option value="">Elige tu moneda</option>
        {opciones.map(opcion => (
          <option
          key={opcion.id}
          value={opcion.id}
          >{opcion.name}</option>
        ))}
      </Select>
    
    </>

  )
  return [SelectMoney]
}

export default useSelectMoney