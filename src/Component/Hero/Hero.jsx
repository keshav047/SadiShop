import React from "react";
import Heros from "../../assets/Hero.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Hero() {
  return (
    <>
      <div className="container-fluid position-relative p-0" style={{ height: "100vh" }}>
  
        <img
          src={Heros}
          alt="Hero"
          className="img-fluid"
          style={{ height: "100vh", width: "100%", objectFit: "cover" }}
        />

       
        <div className="container">
          <div
            className="position-absolute d-flex flex-column justify-content-center"
            style={{ top: 0, left: 0, height: "100%",padding: "0 10%"}}
          >
            <h2  className="text-white f45" style={{fontSize:'66px',fontWeight:'700'}}>
              Unfolding the <br /> Beauty{" "}
              <span style={{ color: "#7E1518" }}>of Indian</span> Heritage
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
    </>
  );
}

export default Hero;
