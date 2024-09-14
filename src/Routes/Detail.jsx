import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'; // Importar el hook para obtener el parámetro de la URL
import { ContextGlobal } from '../Components/utils/global.context'; // Importar el contexto global para el tema

const Detail = () => {
  const { id } = useParams(); // Obtener el id del dentista desde la URL
  const { theme } = useContext(ContextGlobal); // Obtener el tema desde el contexto global
  const [dentist, setDentist] = useState(null);

  // Fetch para obtener los detalles del dentista
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data))
      .catch(error => console.error('Error fetching dentist details:', error));
  }, [id]);

  if (!dentist) {
    return <div>Cargando...</div>; 
  }

  return (
    <main className={theme === 'dark' ? 'dark' : ''}>
      <h1>Detail Dentist ID: {id}</h1>
      <table>
  <tr>
    <td>Nombre</td>
    <td>Email</td>
    <td>Teléfono</td>
    <td>Website</td>
    <td>Compañía</td>
    <td>Dirección</td>    
  </tr>
  <tr>
    <td>{dentist.username}</td>
    <td>{dentist.email}</td>
    <td> {dentist.phone}</td>
    <td>{dentist.website}</td>
    <td>{dentist.company.name}</td>
    <td>{`${dentist.address.street}, ${dentist.address.city}`}</td>
  </tr>


</table>
    </main>
  );
};

export default Detail;
