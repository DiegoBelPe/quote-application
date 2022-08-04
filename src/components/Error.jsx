import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
  background-color: #B7322C;
  color: #FFF;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Lato', cursive;
  font-weight: 700;
`

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error