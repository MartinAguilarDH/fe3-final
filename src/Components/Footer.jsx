import React from 'react'

const Footer = () => {

  const irAlInicio = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  return (
    <><div class="Volverfooter" onClick={irAlInicio}>
      <h2>Ir Al Inicio</h2>
    </div>
    <footer>

        <img src="./img/DH.png" alt='DH-logo' />
        <img src="./img/ico-facebook.png" alt='FB' class="TamanoRedes" />
        <img src="./img/ico-instagram.png" alt='Instagram' class="TamanoRedes" />
        <img src="./img/ico-whatsapp.png" alt='whatsapp' class="TamanoRedes" />
        <img src="./img/ico-tiktok.png" alt='Tiktok' class="TamanoRedes" />
      </footer></>

      
  )
}

export default Footer
