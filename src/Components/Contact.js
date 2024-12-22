import React from 'react'
import  { useState } from 'react';
import './contact.css';

/*const Contact=()=> {
  return (
    <div>
        <h2>Contact information</h2>
        <form>
            
        </form>
    </div>
  )
}
export default Contact*/

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      // Ici, vous pouvez ajouter la logique pour envoyer les données
      console.log('Nom:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      
      // Réinitialiser le formulaire
      setName('');
      setEmail('');
      setMessage('');
  };

  return (
      <div className="contact-form-container">
          <h2>Contactez-nous</h2>
          <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input 
                      type="text" 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                      type="email" 
                      id="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                      id="message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      required 
                  />
              </div>
              <button type="submit" className="submit-button">Envoyer</button>
          </form>
      </div>
  );
};

export default Contact;