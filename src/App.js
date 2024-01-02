import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Pravi.css';
import Footer from './Footer.js';

import Home from './Home';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  
  return (
    <Router>
      <div className="App">

        <nav>
          <ul>
            <li>
              <Link to="/">Osnovne Informacije</Link>
            </li>
            <li>
              <Link to="/services">Vrste Dela</Link>
            </li>
            <li>
              <Link to="/gallery">Galerija Projektov</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
