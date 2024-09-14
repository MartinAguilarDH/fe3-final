import React from "react";
import { Link } from "react-router-dom"; 
const Card = ({ name, username, id }) => {

  const addFav = () => {
    const Favoritos = JSON.parse(localStorage.getItem('favs')) || [];
    const EstanEnFavoritos = Favoritos.some(fav => fav.id === id);

    if (!EstanEnFavoritos) {
      const newFav = { id, name, username };
      const updatedFavs = [...Favoritos, newFav];
      localStorage.setItem('favs', JSON.stringify(updatedFavs));
      alert(`${name} Ha sido agregado a favoritos correctamente`);
    } else {
      alert(`${name} El usuario ya está en favoritos.`);
    }
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
      <img src="./img/doctor.jpg"  alt="Dentista" class="DentistaImg" />
        <h3 class="TextImagenDentista" >{name}</h3>
        <p class="TextImagenDentista" > {username}</p>
        <p hidden>ID: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton"><img src="./img/estrella.webp"  alt="Estrella" class="IconoTamaño" /></button>
    </div>
  );
};

export default Card;


