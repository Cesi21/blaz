
import './Pravi.css'; // Svoj CSS za Services
import kopalnicaImage from './slike/kopalnica.jpg'; // Primer poti do slike
import terasaImage from './slike/terasa.jpg'; // Primer poti do slike
import hodnikImage from './slike/hodnik.jpg'; // Primer poti do slike
import React, { useEffect, useRef, useState } from 'react';

function Services() {
    const [isVisible, setIsVisible] = useState({});
    const refServiceItems = useRef([]);
  
    useEffect(() => {
      const currentRefs = refServiceItems.current; // Shranitev trenutnih referenc
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(prevState => ({...prevState, [entry.target.id]: true }));
            }
          });
        },
        { threshold: 0.5 } // Nastavitev, da se sproži, ko je 50% elementa viden
      );
  
      currentRefs.forEach(el => {
        if (el) observer.observe(el);
      });
  
      return () => {
        currentRefs.forEach(el => {
          if (el) observer.unobserve(el);
        });
      };
    }, []);
  
    const addToRefs = (el) => {
      if (el && !refServiceItems.current.includes(el)) {
        refServiceItems.current.push(el);
      }
    };
  return (
    <div className="services-container">
      <div ref={addToRefs} id="service1" className={`service-item ${isVisible['service1'] ? 'fade-in' : ''}`}>
        <img src={kopalnicaImage} alt="Kopalnica" />
        <p>Obnova kopalnic</p>
      </div>
      <div ref={addToRefs} id="service2" className={`service-item ${isVisible['service2'] ? 'fade-in' : ''}`}>        
      <img src={terasaImage} alt="Terasa" />
        <p>Polaganje teras</p>
      </div>
      <div ref={addToRefs} id="service3" className={`service-item ${isVisible['service3'] ? 'fade-in' : ''}`}>        
      <img src={hodnikImage} alt="Hodnik" />
        <p>Polaganje hodnikov in stopnjišč</p>
      </div>
    </div>
  );
}

export default Services;

