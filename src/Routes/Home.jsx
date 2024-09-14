import React, { useContext, useEffect, useState } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Home = () => {
  const { theme } = useContext(ContextGlobal);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <main className={theme === 'dark' ? 'dark' : ''}>
      <h1>Home</h1>
      <div className='card-grid'>
        {users.map(user => (
          <Card key={user.id} id={user.id} name={user.name} username={user.username} />
        ))}
      </div>
    </main>
  );
};

export default Home;

