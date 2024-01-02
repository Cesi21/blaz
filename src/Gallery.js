import React from 'react';
import './Pravi.css'; // Zagotovite, da imate ustrezno povezano CSS datoteko
import image1 from './slike/1.jpg'; // Uvozite slike
import image2 from './slike/2.jpg'; // Uvozite slike
import image3 from './slike/3.jpg'; // Uvozite slike
import image4 from './slike/4.jpg'; // Uvozite slike
import image5 from './slike/5.jpg'; // Uvozite slike
import image6 from './slike/6.jpg'; // Uvozite slike
import image7 from './slike/7.jpg'; // Uvozite slike
import image8 from './slike/8.jpg'; // Uvozite slike
import image9 from './slike/9.jpg'; // Uvozite slike
import image10 from './slike/10.jpg'; // Uvozite slike
// Ponovite uvoz za ostale slike

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-item">
        <img src={image1} alt="Prva" />
      </div>
      <div className="gallery-item">
        <img src={image2} alt="Prva" />
      </div>
      <div className="gallery-item">
        <img src={image3} alt="Prva" />
      </div>
      <div className="gallery-item">
        <img src={image4} alt="Prva" />
      </div>
      <div className="gallery-item">
        <img src={image5} alt="Prva" />
      </div>
      <div className="gallery-item">
        <img src={image6} alt="Prva" />
      </div>
      <div className="gallery-item">
        <img src={image7} alt="Prva" />
      </div>
      <div className="gallery-item">
        <img src={image8} alt="Prva" />
      </div>
      <div className="gallery-item">
        <img src={image9} alt="Prva" />
      </div>
      <div className="gallery-item">
        <img src={image10} alt="Prva" />
      </div>

      
    </div>
  );
}

export default Gallery;