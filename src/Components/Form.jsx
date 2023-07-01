import React from "react";
import { useState } from 'react'


const Form = () => {
  // (ok) Aqui deberan implementar el form completo con sus validaciones

    const [usuario, setUsuario] = useState({
        nombre: '',
        email: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(usuario.nombre.length > 5 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.email)) {
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }
  
return (
  <div>
      <form onSubmit={handleSubmit}>
          <label >Nombre completo: </label>
          <input type="text" disabled={show} onChange={(event) => setUsuario({...usuario, nombre: event.target.value })} />
          <label >Email: </label>
          <input type="email" disabled={show} onChange={(event) => setUsuario({...usuario, email: event.target.value, })}/>
          <button className="submit-button">Enviar</button>
      </form>
      {error && 'Por favor verifique su información nuevamente'}
      {show ? 
          <>
              <h3>Gracias, {usuario.nombre}!</h3>
              <h3>te contactaremos cuando antes a tu email: {usuario.email}.</h3>
          </>
          :
          null
      }
  </div>
)
}

export default Form;
