import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className=" text-white" style={{backgroundColor:'#4e4e4f'}}>
      <div className="container py-5">
        <div className="row">
          {/* Travel Agency 4u Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="mb-4 text-white fw-bold">
              <u>Job Application for Travel Agency 4u</u>
            </h3>
            <p>
              Travel Agency 4u Job Apply offers a straightforward, dependable, and quick application process to people all across Pakistan. Apply using precise procedures and dependable assistance at every turn.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="mb-4 text-white fw-bold">
              <u>Quick Links</u>
            </h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Success Story: Empowering Lives through Travel Agency 4u Job Apply</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Welcome to Travel Agency 4u Job Apply</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-md-4 ">
            <h3 className="mb-4 text-white fw-bold">
              <u>Newsletter</u>
            </h3>
            <p>
              Join us this month as we explore the latest 
              trends in health, technology, and lifestyle. 
              Discover valuable tips to enhance your well-
              being and make informed choices for a 
              smarter, more fulfilling life!
            </p>
            <div className="input-group mt-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email" 
                aria-label="Email"
              />
              <button 
              style={{backgroundColor:'#1175C1'}}
                className="btn" 
                type="button"
              >
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-dark py-3 text-white">
  <div className="container d-flex justify-content-between align-items-center flex-wrap">
    <div className="small">
      © Copyright Travel Agency 4u Job Apply Pakistan. All rights reserved.
    </div>
    <div>
      <Link to="/disclaimer" className="me-3 small text-white text-decoration-none">Disclaimer</Link>
      <Link to="/privacy-policy" className="me-3 small text-white text-decoration-none">Privacy Policy</Link>
      <Link to="/terms-and-conditions" className="small text-white text-decoration-none">Terms and Conditions</Link>
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;