import React from 'react'
import All1 from '../../assets/All1.png';
import All2 from '../../assets/All2.png';
import All3 from '../../assets/All3.png';
import All4 from '../../assets/All4.png';
import { Link } from 'react-router-dom';



function All() {
    const data = [
        {
          img: All1,
          name: 'Anarkali Suits',
          description:
            'Intricately woven with rich zari work, perfect for weddings and festive occasions',
          price: '₹6,499.',
        },
        {
          img: All2,
          name: 'Anarkali Suits',
          description:
            'Intricately woven with rich zari work, perfect for weddings and festive occasions',
          price: '₹6,499.',
        },
        {
          img: All3,
          name: 'Anarkali Suits',
          description:
            'Intricately woven with rich zari work, perfect for weddings and festive occasions',
          price: '₹6,499.',
        },
        {
          img: All4,
          name: 'Anarkali Suits',
          description:
            'Intricately woven with rich zari work, perfect for weddings and festive occasions',
          price: '₹6,499.',
        },
        {
            img: All1,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All2,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All3,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All4,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All1,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All2,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All3,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All4,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All1,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All2,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All3,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All4,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All1,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All2,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All3,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: All4,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          }
      ];
  return (
    <>
       <div className="container-fluid py-5">
       <div className="container d-flex gap-3 justify-content-center mb-4">
        <Link to="/collections/all" className="btn btn-danger">All</Link>
        <Link to="/collections/suit-salwar" className="btn btn-danger">Suit Salwar</Link>
        <Link to="/collections/salwar" className="btn btn-danger">Salwar</Link>
        <Link to="/collections/gowns" className="btn btn-danger">Gowns</Link>
        <Link to="/collections/bridal" className="btn btn-danger">Bridal</Link>
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

export default All
