import React, { useContext, useEffect, useState } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Form from '../Components/Form'

const Contact = () => {
  const { theme } = useContext(ContextGlobal);
  return (
    <main className={theme === 'dark' ? 'dark' : ''}>
    <div>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
      <Form/>
    </div>
    <br />
  </main>

  )
}

export default Contact