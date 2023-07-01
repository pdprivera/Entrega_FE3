import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';
import doctor from '/images/doctor.jpg';
import axios from 'axios'

// //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const { state, dispatch} = useContextGlobal();
  const { theme } = state;
  const {id} = useParams();
  const urlid = `https://jsonplaceholder.typicode.com/users/${id}` 

  useEffect(() => {
    axios(urlid)
    .then(res => dispatch({type: 'GET_DENT', payload: res.data}))
    }, [])

  return (
    <div className={theme}>
      <div className='center'>
        <h2>Detalle dentista</h2>
        <img className="card-img" src={doctor} alt="Doctor" />
        <h5>Name: {state.dentista.name}</h5>
        <h5>Email: {state.dentista.email}</h5>
        <h5>Phone: {state.dentista.phone}</h5>
        <h5>Website: {state.dentista.website}</h5>
      </div>
    </div>
  )
}

export default Detail