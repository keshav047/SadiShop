import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container-fluid py-4" style={{ backgroundColor: "#7E1518", color: "white" }}>
        <div className="container">
          <div className="row">
            {/* Logo and About Section */}
            <div className="col-lg-3 mb-4">
              <h2 className="text-white">Logo</h2>
              <p style={{color:"white"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis 
                consequatur impedit nihil voluptas libero aperiam? Voluptatum blanditiis nemo 
                dignissimos aperiam vitae optio rem architecto iure! Perspiciatis maiores quasi ipsum.
              </p>
            </div>

            {/* Follow Us Section */}
            <div className="col-lg-3 mb-4">
              <h2 className="text-white">Follow Us</h2>
              <ul className="list-unstyled">
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
            </div>

            {/* Company Links Section */}
            <div className="col-lg-3 mb-4">
              <h2 className="text-white">Company</h2>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Collections</li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="col-lg-3 mb-4">
              <h2 className="text-white">Contact Us</h2>
              <ul className="list-unstyled">
                <li>Manjeet Singh And Company, Arya Samaj Rd, Bahadurpur, Ballia, Uttar Pradesh 277001</li>
                <li>Phone: 99365 38429</li>
                <li>Email: contact@manjeetrestaurantandsweet.com</li>
                <li>Hours: 7 Days a week from 10:00 am</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
