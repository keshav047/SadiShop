import React from 'react';

import { Link } from 'react-router-dom';
// import SuitG1 from '../../assets/'
import G1 from '../../assets/G1.png';
import G2 from '../../assets/G2.png';
import G3 from '../../assets/G3.png';
import G4 from '../../assets/G4.png';
import G5 from '../../assets/G5.png';
import G6 from '../../assets/G6.png';
import G7 from '../../assets/G7.png';
import G8 from '../../assets/G8.png';
import G9 from '../../assets/G9.png';
import G10 from '../../assets/G10.png';
import G11 from '../../assets/G11.png';
import G12 from '../../assets/G12.png';


function  Gowns() {
    const data=[
        {
            img: G1,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img:G2,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: G3,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: G4,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: G5,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: G6,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: G7,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: G8,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: G9,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: G10,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: G11,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: G12,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          

    ]
  return (
    <>
      <div className="container-fluid py-5 ">
      
      <div className="container d-flex gap-3 justify-content-center mb-4">
        <Link to="/collections/all" className="btn btn-primary">All</Link>
        <Link to="/collections/suit-salwar" className="btn btn-primary">Suit Salwar</Link>
        <Link to="/collections/salwar" className="btn btn-primary">Salwar</Link>
        <Link to="/collections/gowns" className="btn btn-primary">Gowns</Link>
        <Link to="/collections/bridal" className="btn btn-primary">Bridal</Link>
      </div>

        <div className="container">
          <div className="row g-4 d-flex">
            {data.map((item, index) => (
              <div className="col-lg-3" key={index}>
                <div className="card" style={{background:"none",border:"none"}}>
                  <img
                    src={item.img}
                    className="card-img-top img-fluid"
                    alt={item.name}
                  />
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <h2>{item.price}</h2>
                  <div className="d-flex">
                    <button className="btn fw-bolder" style={{background: '#D9D9D9',color:"#7E1518"}}>Add To Cart</button>
                    <button className="btn ms-2 text-white fw-bolder" style={{background: '#7E1518',color:"#7E1518"}}>Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Gowns
