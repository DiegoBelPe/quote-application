import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: white;

`

const useSelectMoney = (label) => {
  
  const SelectMoney = () => (
    <>
      <Label>{label}</Label>
    
    </>

  )
  return [SelectMoney]
}

export default useSelectMoney