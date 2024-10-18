import React from 'react';


// import SuitSalwar1 from '../../assets/'
import SuitSalwar1 from '../../assets/SuitSalwar1.png';
import SuitSalwar2 from '../../assets/SuitSalwar2.png';
import SuitSalwar3 from '../../assets/SuitSalwar3.png';
import SuitSalwar4 from '../../assets/SuitSalwar4.png';

function SuitSalwar() {
    const data=[
        {
            img: SuitSalwar1,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar2,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar3,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar4,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar1,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar2,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar3,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar4,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar1,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar2,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar3,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar4,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar1,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar2,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar3,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          {
            img: SuitSalwar4,
            name: 'Anarkali Suits',
            description:
              'Intricately woven with rich zari work, perfect for weddings and festive occasions',
            price: '₹6,499.',
          },
          

    ]
  return (
    <>
      <div className="container-fluid py-5 ">
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

export default SuitSalwar
