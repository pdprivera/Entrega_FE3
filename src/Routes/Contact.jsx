import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { state } = useContextGlobal();
  const { theme } = state;

  return (
    <div className={theme}>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tu correo y te contactaremos</p>
      <Form/>
    </div>
  )
}

export default Contact