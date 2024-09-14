import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={theme === "dark" ? "Truedark" : "light"}>

<div>
<h1><span class='rojo'>D</span>H Odonto</h1>
    </div>

    <div>
        <a href="/home">Home</a>
        <a href="/contacto">Contact</a>
        <a href="/favs">Favs</a>
              {}
              <button onClick={toggleTheme} className={theme === "dark" ? "dark-button" : "light-button"}      >
              <img 
          src={theme === "dark" ? "./img/sol.webp" : "./img/luna.png"} 
          alt={theme === "dark" ? "Sol" : "Luna"} 
          style={{ width: '30px', height: '30px' }} 
        />
      </button>
              </div>


    </nav>
  );
}

export default Navbar;
