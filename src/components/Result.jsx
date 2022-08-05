import styled from "@emotion/styled"

const Contenedor = styled.div`
  color: #FFF;
  font-family: 'lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

`
const Image = styled.img`
  display: block;
  width: 120px;
`
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }

`

const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }

`

const Result = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, IMAGEURL, LASTUPDATE} = resultado
  
  return (
    <Contenedor>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="crypto-image" />
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
        <Texto>Variacion las ultimas 24 horas: <span>{CHANGE24HOUR}</span></Texto>
        <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  )
}

export default Result