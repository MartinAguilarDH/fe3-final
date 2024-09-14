import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const { name, email } = formData;
    let isValid = true;
    let errors = '';

    if (name.length <= 5) {
      errors += 'Nombre completo debe tener más de 5 caracteres. ';
      isValid = false;
    }

    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors += 'Formato de email incorrecto. ';
      isValid = false;
    }

    if (!isValid) {
      setErrors(errors);
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log('Formulario enviado:', formData);
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuando antes vía mail.`);
      setErrors(''); // Clear errors if any
      setFormData({ name: '', email: '' }); // Clear form fields
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div class="m-10">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre completo:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required class="EstiloImput"/>
        </div>
        <div>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required class="EstiloImput"/>
        </div>
        <button type="submit" class="m-10">Enviar</button>
      </form>
      <br />
      {errors && <p style={{ color: 'red' }}>{errors}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Form;

