import React from 'react'
import { useContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useContextGlobal();
  const { theme } = state;

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map((dentista) => (
          <Card key={dentista.id} name={dentista.name} username={dentista.username} />
        ))}
      </div>
    </main>
  )
}

export default Home