import React from "react";

import { Link } from "react-router-dom";
// import SuitSalwar1 from '../../assets/'
import Salwar1 from "../../assets/Salwar1.png";
import Salwar2 from "../../assets/Salwar2.png";
import Salwar3 from "../../assets/Salwar3.png";
import Salwar4 from "../../assets/Salwar4.png";
import Salwar5 from "../../assets/Salwar5.png";
import Salwar6 from "../../assets/Salwar6.png";
import Salwar7 from "../../assets/Salwar7.png";
import Salwar8 from "../../assets/Salwar8.png";

function Salwar() {
  const data = [
    {
      img: Salwar1,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: Salwar2,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: Salwar3,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: Salwar4,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: Salwar5,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: Salwar6,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: Salwar7,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: Salwar8,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: Salwar1,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: Salwar2,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: Salwar3,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: Salwar4,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
  ];
  return (
    <>
      <div className="container-fluid py-5 ">
        <div className="container d-flex gap-3 justify-content-center mb-4">
          <Link to="/collections/all" className="btn btn-danger">
            All
          </Link>
          <Link to="/collections/suit-salwar" className="btn btn-danger">
            Suit Salwar
          </Link>
          <Link to="/collections/salwar" className="btn btn-danger">
            Salwar
          </Link>
          <Link to="/collections/gowns" className="btn btn-danger">
            Gowns
          </Link>
          <Link to="/collections/bridal" className="btn btn-danger">
            Bridal
          </Link>
        </div>
        <div className="container">
          <div className="row g-4 d-flex">
            {data.map((item, index) => (
              <div className="col-lg-3" key={index}>
                <div
                  className="card"
                  style={{ background: "none", border: "none" }}
                >
                  <img
                    src={item.img}
                    className="card-img-top img-fluid"
                    alt={item.name}
                  />
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <h2>{item.price}</h2>
                  <div className="d-flex">
                    <button
                      className="btn fw-bolder"
                      style={{ background: "#D9D9D9", color: "#7E1518" }}
                    >
                      Add To Cart
                    </button>
                    <button
                      className="btn ms-2 text-white fw-bolder"
                      style={{ background: "#7E1518", color: "#7E1518" }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Salwar;
