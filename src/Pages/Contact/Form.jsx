import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or email service
    console.log('Form data submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="container my-5 bg-white shadow-lg rounded-3 p-5 fw-bolder" style={{color:'#7E1518'}}>
      <h2 className="text-center">Contact Us</h2>
      <div className="row justify-content-center">
      <div className="col-lg-7">
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control bg-body-secondary"
            id="name"
            name="name"
            
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control bg-body-secondary"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control bg-body-secondary"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn text-white fw-bolder" style={{backgroundColor:'#7E1518'}}>Submit</button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Form;
