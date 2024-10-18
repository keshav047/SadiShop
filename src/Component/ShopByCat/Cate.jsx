import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Suit from "../../assets/Suit.png";
import Gown from "../../assets/Gown.png";
import Plus from "../../assets/Plus.png";
import Salwar from "../../assets/Salwar.png";
import Saree from "../../assets/Saree.png";

function Cate() {
  const data = [
    { img: Suit, name: "Suit Salwar" },
    { img: Salwar, name: "Salwar" },
    { img: Gown, name: "Gown" },
    { img: Saree, name: "Bridal Sarees" },
    { img: Plus, name: "Plus Size Kurtis" },
  ];

  return (
    <div className="container-fluid py-5">
    <h2 className="text-center py-2">Shop By Category</h2>
      <div className="container">
        <div className="row g-1 justify-content-center" style={{ gap: "3rem" }}>
          {data.map((item, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6" key={index}>

            <div className="card position-relative">
  <img src={item.img} className="card-img-top" alt={item.name || "Card image"} />
  <div className="card-body position-absolute text-white bottom-0 ">
    <h2 className="card-title">{item.name}</h2>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cate;
