import './estilos/PrimerComponente.css'

const string = "esto es un texto"
const number = 123456
const array = ['curso de react', 'youtube', '4', '100000']
//const boolian = true
//const funcion = () => 1 + 1
//const objeto = { nombre: 'curso de jsx', duracion: 4 }
const fecha = new Date("01-02-90")



export const PrimerComponente = () => {
  return (

    <>
      <h1> Variables en jsx</h1>
      <h4> esto es una string: {string}</h4>
      <h4> esto es una number: {number}</h4>
      <h4> esto es una array: {array}</h4>
      <h4> esto es una fecha: {JSON.stringify(fecha)}</h4>
    </>




  )
}

