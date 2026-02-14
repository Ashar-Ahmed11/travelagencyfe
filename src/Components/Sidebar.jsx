import React from 'react';
import {Link } from "react-router-dom";
import asaanQarz6 from '../Images/newAkhuwat23.jpg'
import { getCdnUrl } from '../utils/cdnImage'

const Sidebar = () => {
  return (
    <div className=" sidebar bg-light pt-4 pl-4">
      {/* Search Container */}
      <div className="w-1/4 search-container bg-white p-4 mb-4 rounded shadow-sm">
        <form className="d-flex">
          <input 
            type="search" 
            className="form-control" 
            placeholder="Search ..." 
            aria-label="Search"
          />
          <button className="btn btn-secondary ms-2" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      
      {/* Pages Container */}
      <div className="w-1/4 pages-container bg-white p-3 mb-4 rounded shadow-sm">
        <h5 className="mb-3">Pages</h5>
        <ul className="list-unstyled p-4">
          <li className="mb-2">
            <Link to="/about-us" className="text-primary">About Us</Link>
          </li>
          <li className="mb-2">
            <Link to="/akhuwat-bussiness-loan" className="text-primary">Travel Embassy Business Job Apply</Link>
          </li>
          <li className="mb-2">
            <Link to="/akhuwat-house-loan" className="text-primary">Travel Embassy House Job Apply</Link>
          </li>
          <li className="mb-2">
            <Link to="/akhuwat-loan-services" className="text-primary">Travel Embassy Job Apply Services</Link>
          </li>
          <li className="mb-2">
            <Link to="/apply-for-a-loan" className="text-primary">Apply – Travel Embassy Job Apply</Link>
          </li>
          <li className="mb-2">
            <Link to="/contact-us" className="text-primary">Contact Us – Travel Embassy Job Apply</Link>
          </li>
          <li className="mb-2">
            <Link to="/disclaimer" className="text-primary">Disclaimer</Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="text-primary">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/privacy-policy" className="text-primary">Privacy Policy</Link>
          </li>
          <li className="mb-2">
            <Link to="/success-story" className="text-primary">Success Story: Empowering Lives through Travel Embassy Job Apply</Link>
          </li>
          <li className="mb-2">
            <Link to="/terms-and-conditions" className="text-primary">Terms and Conditions – Travel Embassy Job Apply</Link>
          </li>
        
        </ul>
      </div>
      
      {/* Promotional Image Container */}
      <div className="w-1/4 promo-container bg-white p-4 rounded shadow-sm">
        <Link to="/apply-now">
          <img 
            src={getCdnUrl(asaanQarz6)}
            alt="Travel Embassy Job Apply Promotion" 
            className="img-fluid rounded"
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;