import React from 'react';
import './Contact.css'
import Contact1 from '../../assets/contact1.png';


function Hero() {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <img src={Contact1} alt="Loading..." className="img-fluid w-100" />
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h2 className="text-white fw-bold hero-text">
            We’d Love to<br /> Hear From You!
          </h2>
        </div>
      </div>
    </>
  );
}

export default Hero;
