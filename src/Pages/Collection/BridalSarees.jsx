import React from "react";
import { Link } from "react-router-dom";

// import SuitBS1 from '../../assets/'
import BS1 from "../../assets/BS1.png";
import BS2 from "../../assets/BS2.png";
import BS3 from "../../assets/BS3.png";
import BS4 from "../../assets/BS4.png";
import BS5 from "../../assets/BS5.png";
import BS6 from "../../assets/BS6.png";
import BS7 from "../../assets/BS7.png";
import BS8 from "../../assets/BS8.png";
import BS9 from "../../assets/BS9.png";
import BS10 from "../../assets/BS10.png";
import BS11 from "../../assets/BS11.png";
import BS12 from "../../assets/BS12.png";

function BridalSarees() {
  const data = [
    {
      img: BS1,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: BS2,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: BS3,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: BS4,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: BS5,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: BS6,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: BS7,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: BS8,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: BS9,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: BS10,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: BS11,
      name: "Anarkali Suits",
      description:
        "Intricately woven with rich zari work, perfect for weddings and festive occasions",
      price: "₹6,499.",
    },
    {
      img: BS12,
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

export default BridalSarees;
