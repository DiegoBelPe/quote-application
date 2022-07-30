import {useState, useEffect} from 'react'

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
  margin-top: 30px;
  :hover {
    cursor: pointer;
    background-color: #326ac0;
  }

  
`

const Form = () => {
  const [crytos, setCrytos] = useState([])

  
  const [ money, SelectMoney] = useSelectMoney("Elige tu moneda", coins)

  useEffect(() => {
    const getApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);

      const arrayCOins = result.Data.map(coin => {
        const obj ={
          id :coin.CoinInfo.Name,
          name: coin.CoinInfo.FullName,
        }
        return obj;
      })
      setCrytos(arrayCOins)
      
    }
    getApi();

  }, [])

  
  
  
  return (
    <form action="">
      <SelectMoney/>
      {money}
      <InputSubmit type="submit" value="Cotizar"/>
    </form>
  )
}

export default Form