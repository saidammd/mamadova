import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FeedbackForm() {
  // Form sahələrinin state-lərini idarə et
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    comment: '',
  });

  // Müvəffəqiyyətli göndərilmə mesajı
  const [message, setMessage] = useState('');

  // Form sahələrində dəyişiklik olduqda state-i yenilə
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Formu göndərdikdə müvəffəqiyyət mesajı göstər
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Form uğurla göndərildi!'); // Göndərmə mesajı
    setFormData({
      name: '',
      surname: '',
      phone: '',
      email: '',
      comment: '',
    }); // Formu sıfırlamaq
  };

  return (
    <div className="form-container">
      <h1>Feedback Formu</h1>
      {message && <div className="success-message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Ad</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Soyad</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefon</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Şərh</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Göndər</button>
      </form>
    </div>
  );
}

// PropTypes ilə form sahələrinin doğrulaması
FeedbackForm.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  comment: PropTypes.string,
};

function App() {
  return (
    <div className="App">
      <FeedbackForm />
    </div>
  );
}

export default App;
