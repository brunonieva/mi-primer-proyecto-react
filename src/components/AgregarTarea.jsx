
import { useState } from 'react';
import { PropTypes } from 'prop-types';

export const AgregarTarea = ({ agregarTarea }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        agregarTarea(inputValue)

    }

    

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="ingrese nueva tarea"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}


AgregarTarea.propTypes = {
    agregarTarea: PropTypes.any.isRequired,
  }