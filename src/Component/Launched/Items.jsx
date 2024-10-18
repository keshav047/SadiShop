import React from 'react';
import './Items.css';

import Js1 from '../../assets/Js1.png';
import Js2 from '../../assets/Js2.png';
import Js3 from '../../assets/Js3.png';
import Js4 from '../../assets/Js4.png';

function Items() {
  const data = [
    {
      img: Js1,
      name: 'Anarkali Suits',
      description:
        'Intricately woven with rich zari work, perfect for weddings and festive occasions',
      price: '₹6,499.',
    },
    {
      img: Js2,
      name: 'Anarkali Suits',
      description:
        'Intricately woven with rich zari work, perfect for weddings and festive occasions',
      price: '₹6,499.',
    },
    {
      img: Js3,
      name: 'Anarkali Suits',
      description:
        'Intricately woven with rich zari work, perfect for weddings and festive occasions',
      price: '₹6,499.',
    },
    {
      img: Js4,
      name: 'Anarkali Suits',
      description:
        'Intricately woven with rich zari work, perfect for weddings and festive occasions',
      price: '₹6,499.',
    },
  ];

  return (
    <>
      <h2 className='text-center my-3'>Just Launched</h2>
      <div className="container-fluid">
        <div className="container">
          <div className="row g-4">
            {data.map((item, index) => (
              <div className="col-lg-3" key={index}>
                <div className="card">
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
  );
}

export default Items;
