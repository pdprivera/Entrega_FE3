import React from "react";
import { useContextGlobal } from '../Components/utils/global.context';
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state } = useContextGlobal();
  const { theme } = state;
  const favorites = JSON.parse(localStorage.getItem("favs"));

  return (
    <div className={theme}>
      <h2>Favoritos</h2>
      <div className="card-grid">
        {favorites.map(fav => (
          <Card
            key={fav.id}
            name={fav.name}
            username={fav.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
