import { useState } from "react"
import PropTypes from 'prop-types';

export const ContadorApp = ({value}) => {

  const [contador, setContador] = useState(value)

  const haciendoClick = () => {
    setContador(contador + 1)

  }


  return (

    <>
      <h1>contador:</h1>
      <p>{contador}</p>
      <button onClick={haciendoClick}>Boton sumador</button>

    </>
  )
}

ContadorApp.propTypes = {
  value: PropTypes.any.isRequired,
}

