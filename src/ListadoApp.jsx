import { useState } from "react"
import { AgregarTarea } from './components/AgregarTarea';


// eslint-disable-next-line react/prop-types
const Items = ({ nombre, visto }) => {
  return (
    <li className="custom1">
      {nombre}
      {visto ? '✔' : '❌'}      {/* condicionales ternarios */}
    </li>
  )

}

export const ListadoApp = () => {

  const addTask = () => {
      setArreglo([...arreglo, { nombre: "nuevo", visto: false } ])

  }

  let listadoSecciones = [
    { id: 1 , nombre: "instalaciones", visto: true }, 
    { id: 2 , nombre: "uso de vite", visto: true },
    { id: 3 , nombre: "componentes", visto: true },
    { id: 4 , nombre: "variables de jsx", visto: false },
    { id: 5 , nombre: "react", visto: false },
  ]

  const [arreglo, setArreglo] = useState(listadoSecciones)
  
  const onAgregarTareas = (val) => {
       let valor = val.trim()
      if (valor < 1) return

      const envio = { id:arreglo.length + 1, nombre: valor, visto: false}
      setArreglo([...arreglo, envio])
  }
  return (
    <>
      <h1 >lista de temas de react</h1>
      <AgregarTarea agregarTarea = {onAgregarTareas}></AgregarTarea>
      <ol>
          {arreglo.map(aux => <Items key={aux.id} nombre={aux.nombre} visto={aux.visto}></Items>) }
      </ol>


     {/*  <button onClick={() => addTask()}>Agregar Tarea</button> */}

    </>
  )
}


