import React from "react";
import './Off.css'
import Off1 from "../../assets/Off1.png";
import Off2 from "../../assets/Off2.png";

function Offpercent() {
  return (
    <>
      <div className="container-fluid py-3">
        <div className="container">
          <div className="row g-4">
        
          <div className="col-lg-6">
              <div className="card position-relative">
                <img src={Off1} className="img-fluid" alt="Off1" />
                
                <div 
                  className="position-absolute text-danger bg-white rounded-bottom-2 px-2 py-2" 
                  style={{ right: '20px' }}
                >
                  <h2>
                    FLAT<br /> 20%<br /> OFF
                  </h2>
                </div>
                
                <div 
                  className="position-absolute text-white" 
                  style={{ bottom: '10px', left: '30px' }}
                >
                  <h2 className="f45" style={{ fontSize: '45px' }}>Suit Salwar<br/> Under</h2>
                  <h2 className="f45" style={{ fontSize: '45px' }}>Rs. 1999</h2>
                  <div className="d-flex my-3">
                    <button 
                      className="btn fw-bolder" 
                      style={{ background: '#D9D9D9', color: "#7E1518" }}
                    >
                      Add To Cart
                    </button>
                    <button 
                      className="btn ms-2 fw-bolder" 
                      style={{ background: '#7E1518', color: "#D9D9D9" }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="col-lg-6">
              <div className="card position-relative">
                <img src={Off2} className="img-fluid" alt="Off1" />
                
                <div 
                  className="position-absolute text-danger bg-white rounded-bottom-2 px-2 py-2" 
                  style={{ right: '20px' }}
                >
                  <h2>
                    FLAT<br /> 20%<br /> OFF
                  </h2>
                </div>
                
                <div 
                  className="position-absolute text-white" 
                  style={{ bottom: '10px', left: '30px' }}
                >
                  <h2 className="f45" style={{ fontSize: '45px' }}>Suit Salwar<br /> Under</h2>
                  <h2 className="f45" style={{ fontSize: '45px' }}>Rs. 1999</h2>
                  <div className="d-flex my-3">
                    <button 
                      className="btn fw-bolder" 
                      style={{ background: '#D9D9D9', color: "#7E1518" }}
                    >
                      Add To Cart
                    </button>
                    <button 
                      className="btn ms-2 fw-bolder" 
                      style={{ background: '#7E1518', color: "#D9D9D9" }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offpercent;
