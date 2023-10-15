
import { useState } from 'react';
export const FormularioComponent = () => {

    const [formularioState, setFormularioState] = useState({

        userName: 'brunonieva90',
        email: 'brunonieva90@gmail.com',
        password: '1234'

    })

    const { userName, email, password } = formularioState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormularioState({
            ...formularioState,
            [name]: value
        })

    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formularioState)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">Usuario</label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="ingrese su usuario"
                    value={userName}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="ingrese su Email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="ingrese su contraseña"
                    value={password}
                    onChange={onInputChange}
                />

            </div>
            <button
                type="submit"
                className="btn btn-primary"
            >Enviar
            </button>
        </form>
    )
}
