import React from 'react'

function Footer() {
  return (
    <>
      <div className="container-fluid py-3" style={{backgroundColor:"#7E1518",color:'white'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                        <h2 >Logo</h2>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis consequatur impedit nihil voluptas libero aperiam? Voluptatum blanditiis nemo dignissimos aperiam vitae optio rem architecto iure! Perspiciatis maiores quasi ipsum.</p>
                </div>
                <div className="col-lg-3">
                    <h2>Follow Us</h2>
                    <ul>
                        <li>
                            Facebook
                        </li>
                        <li>
                            LinkdIn
                        </li>
                        <li>
                            Instagram
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Collections</li>
            </ul>
                </div>
                <div className="col-lg-3">
        <h2>Contact Us</h2>
        <ul>
       <li>Manjeet Singh And Company, Arya Samaj Rd, Bahadurpur, Ballia, Uttar Pradesh 277001</li> 
       <li>Phone: 99365 38429</li>
       <li>Email:contact@manjeetrestaurantandsweet.com</li>  
        <li>Hours: 7 Days a week from 10:00 am</li>

        </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
