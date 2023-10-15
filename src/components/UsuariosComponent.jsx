import { useFetch } from "../hooks/useFetch"


export const UsuariosComponent = () => {

    const {  data ,  isLoading , errors } = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <>
    <p>{data}</p>
    <p>{isLoading}</p>
    <p>{errors}</p>
    
    </>
  )
}

