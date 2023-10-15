
import { useEffect, useState } from 'react';

export const ContadorComponent = () => {
 
    const [contador, setContador] = useState(0)
    
    

    useEffect(() => {
      console.log('estoy en el useEffect')
   
    }, [])
    
 
    return (
    <>
    
    <h1>ContadorComponent</h1>
    <p>contador : {contador}</p>
    <button onClick={()=> setContador(contador + 1)}>sumar</button>
    </>
  )
}
