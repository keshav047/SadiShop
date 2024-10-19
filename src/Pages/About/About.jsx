import React from "react";
// import Heros from "../../assets/Hero.png";

import About1 from "../../assets/About1.png";
import About2 from "../../assets/About2.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function About() {
  return (
    <>
      <div className="container-fluid position-relative p-0" style={{ height: "100vh" }}>
  
        <img
          src={About1}
          alt="About..."
          className="img-fluid"
          style={{ height: "100vh", width: "100%", objectFit: "cover" }}
        />

       
        <div className="container">
          <div
            className="position-absolute d-flex flex-column justify-content-center"
            style={{ top: 0, left: 0, height: "100%",padding: "0 10%"}}
          >
            <h2  className="text-white f45" style={{fontSize:'66px',fontWeight:'700'}}>
            Weaving <span style={{ color: "#7E1518" }}>Traditions,</span><br /> {" "}
              <span style={{ color: "#7E1518" }}>Draping</span>  Elegance
            </h2>

             
            <p className="text-white fs-5 fw-bolder lh">
              At Manjeet Saree, we bring tradition to life with elegant,<br />
              handcrafted sarees that blend heritage and style. Whether for <br />
              weddings, festivals, or everyday wear, each piece reflects timeless <br />
              artistry. Discover your perfect saree and drape yourself in elegance <br />
              and grace.
            </p>
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="container-fluid py-4" style={{ backgroundColor: "#7E1518", color: "white" }}>
        <div className="container">
         <h2 className="text-white ">Our Vision</h2>
         <p className="text-white fw-bolder fs-5">We strive to be the go-to destination for sarees, where tradition meets modern style. Our vision is to continue<br></br> to grow while staying true to our roots and providing our customers with sarees that inspire confidence and elegance.</p>
        </div>
      </div>

      {/* why choose us */}
      <div className="container-fluid position-relative p-0 h80" style={{ height: "80vh" }}>
  
  <img
    src={About2}
    alt="About..."
    className="img-fluid h80"
    style={{ height: "80vh", width: "100%", objectFit: "cover"}}
  />

 
  <div className="container">
    <div
      className="position-absolute d-flex flex-column justify-content-center"
      style={{ top: 0, left: 0, height: "100%",padding: "0 10%"}}
    >
      <h2  className="text-white f45" style={{fontSize:'66px',fontWeight:'700'}}>
      Why Choose Us?
      </h2>

       
      <ul>
        <li className="fs-4 fw-bolder text-white">
        Unparalleled Variety: From bridal to casual, we offer a vast collection of sarees that suit every taste and occasion.</li>
        <li className="fs-4 fw-bolder text-white"> Superior Quality: Our sarees are made with the finest fabrics, designed to ensure both comfort and beauty.</li>
        <li className="fs-4 fw-bolder text-white">Trusted by Generations: Manjeet Saree has been a trusted name for decades, known for delivering the highest standards of fashion and tradition.</li>
        <li className="fs-4 fw-bolder text-white">Personalized Service: We provide a personalized shopping experience, helping you choose the perfect saree for every event.</li>
        
      </ul>
    </div>
  </div>
</div>

{/* Commitment */}
<div
  className="container-fluid  d-flex justify-content-center align-items-center"
  
>
  <div
    className="container bg-white rounded-4 py-4 shadow px-5 "
   
  >
    <h2 style={{ color: '#7E1518', fontWeight: '700' }}>Our Commitment</h2>
    <div className="row">
      <div className="col-lg-11">
        <p className="text-dark fw-bolder" style={{ fontSize: '18px' }}>
          At the heart of Manjeet Saree is our commitment to quality. We work
          with skilled artisans and weavers from across India to bring you
          sarees that are made with passion, precision, and love. Every saree in
          our collection is a testament to the rich textile heritage of India,
          and we take pride in supporting traditional craftsmanship.
        </p>
        <p className="text-dark fw-bolder" style={{ fontSize: '18px' }}>
          We believe that sarees are more than just garments; they are
          expressions of art and culture. By bringing these beautiful creations
          to our customers, we hope to keep the traditions of Indian weaving and
          draping alive for generations to come.
        </p>
      </div>
    </div>
  </div>
</div>


    </>
  );
}

export default About;
