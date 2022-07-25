import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: white;

`

const useSelectMoney = (label, opciones) => {
  
  const SelectMoney = () => (
    <>
      <Label>{label}</Label>
      <select>
        <option value="">Elige tu moneda</option>
        {opciones.map(opcion => (
          <option
          key={opcion.id}
          value={opcion.id}
          >{opcion.name}</option>
        ))}
      </select>
    
    </>

  )
  return [SelectMoney]
}

export default useSelectMoney