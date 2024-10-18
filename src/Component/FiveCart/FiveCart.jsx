import React from 'react'
import Cart1 from '../../assets/Cart1.png';
import Cart2 from '../../assets/Cart2.png';


function FiveCart() {

const data = [
    {
        img: Cart2,
        name: 'Designer Salwar Suits',
        description:
          'Our designer salwar suits are crafted with luxurious fabrics and intricate embellishments,',
        price: '₹6,499.',
      },
      {
        img: Cart2,
        name: 'Designer Salwar Suits',
        description:
          'Our designer salwar suits are crafted with luxurious fabrics and intricate embellishments,',
        price: '₹6,499.',
      },
      {
        img: Cart2,
        name: 'Designer Salwar Suits',
        description:
          'Our designer salwar suits are crafted with luxurious fabrics and intricate embellishments,',
        price: '₹6,499.',
      },
      {
        img: Cart2,
        name: 'Designer Salwar Suits',
        description:
          'Our designer salwar suits are crafted with luxurious fabrics and intricate embellishments,',
        price: '₹6,499.',
      }
]

  return (
    <>
      
      <div className="contanier-fluid py-3">
        <div className="container">
            <div className="row g-3">
                <div className="col-lg-6">
                    <img src={Cart1} alt='Loading..' className='img-fluid h1080' style={{height:'1080px'}}></img>
                    
                </div>

                <div className="col-lg-6">
                <div className="row g-4">
            {data.map((item, index) => (
              <div className="col-lg-6" key={index}>
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
        </div>
      </div>


    </>
  )
}

export default FiveCart
