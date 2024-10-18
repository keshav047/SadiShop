import React from 'react'; 
import Cs1 from "../../assets/cs1.png"

const customerData = [
  {
    id: 1,
    imgSrc: Cs1,
    name: "Saif bhai jan",
    role: "Business Manager",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  },
  {
    id: 2,
    imgSrc: Cs1,
    name: "Priyanka Giri",
    role: "Business Manager",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  },
  {
    id: 3,
   imgSrc: Cs1,
    name: "Monu Jain",
    role: "Business Manager",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  },
];

function Customer() {
  return (
    <div className="container-fluid p-3" style={{color:"#7E1518"}}>
      <div className="container">
        <h2 style={{ color: '#7E1518'}} className="text-center">
          Our Customer Says
        </h2>

        <div className="row py-2">
          {customerData.map((customer) => (
            <div key={customer.id} className="col-lg-4">
              <div className="card p-3 shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-quote"
                  viewBox="0 0 16 16"
                  style={{color:'#7E1518'}}
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
                <p style={{color:'#7E1518'}}>{customer.text}</p>
                <div className="d-flex g-2 align-items-center">
                  <img
                    src={customer.imgSrc}
                    alt="loading..."
                    className="img-fluid rounded-circle"
                    width="50px"
                    height="50px"
                  />
                  <p className=" mx-2 my-2" style={{color:'#7E1518'}}>
                    {customer.name}
                    <br />
                    {customer.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customer;
