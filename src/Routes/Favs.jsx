import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context'; 

const Favs = () => {
  const { theme } = useContext(ContextGlobal);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(storedFavs);
  }, []);

  return (
    <main className={theme === 'dark' ? 'dark' : ''}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length > 0 ? (
          favs.map(fav => (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              username={fav.username}
            />
          ))
        ) : (
          <p>No favorite dentists found.</p>
        )}
      </div>
    </main>
  );
};

export default Favs;

