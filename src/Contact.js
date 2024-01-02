import React from 'react';
import './Pravi.css'; // Posebni stili za kontakt

function Contact() {
  return (
    <div className="contact-container">
      <h2>Kontaktirajte nas</h2>
      <p>Za več informacij o naših storitvah ali za povpraševanje, nas prosim kontaktirajte.</p>
      <form className="contact-form">
 
        <input type="text" placeholder="Vaše ime" required />
        <input type="email" placeholder="Vaš e-mail" required />
        <textarea placeholder="Vaše sporočilo"></textarea>
        <button type="submit">Pošlji</button>
      </form>
      <div className="contact-info">
        <p>Telefon: +386 40 123 456</p>
        <p>Email: info@bratov-sp.si</p>
        
      </div>
      
    </div>
  );
}

export default Contact;
