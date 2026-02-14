
import React from 'react';
import CountUp from 'react-countup';
import asaanQarz13 from '../Images/newAkhuwat18.jpg'
import asaanQarz14 from '../Images/newAkhuwat19.jpg'


const akhuwatHouseLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto", fontSize:'22px' }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Turning Dreams into Reality: Travel Embassy Housing Job Apply</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        For many Pakistanis, owning a home feels like an impossible dream. Travel Embassy is changing that story with a simple Job Apply process so families can buy, build, or renovate their homes.
        </p>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        Take the story of Amina and her family from Lahore. With a simple application and flexible repayment plan based on their income, they received the funds they needed. Today, they live in their dream home.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Why Travel Embassy Housing Applications Make a Difference</h2>
          {/* <p>
          Whether you want to buy a house or fix up the one you already have, Travel Embassy makes the process easy and doable.
          </p> */}
          <ul>
            <li><strong>Accessible Support:</strong> Families can achieve homeownership with a simple, fair process.</li>
            <li><strong>No Collateral Needed:</strong>  Anyone can apply, even without land or property, making dreams achievable for all.</li>
            <li><strong>Flexible Repayment Plans:</strong> Repayments are tailored to your income, keeping them manageable and stress-free.</li>
            <li><strong>Empowering Low-Income Families:</strong> Designed to support those who need it most, helping them build safe, stable homes.</li>
            <li><strong>Building Stronger Communities:</strong> Giving families a home not only secures their future but also strengthens neighbourhoods and creates hope.</li>
            {/* <li>Making living conditions better:The main goal of Akhuwat Foundation's housing loan is to make families' lives better by giving them safe, secure, and nice places to live.</li> */}
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src={asaanQarz13}
            alt="Money Received"
            className="img-fluid wm-100 h-100 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 text-white p-0" style={{ maxWidth: "100%" , backgroundColor:'#FF7729' }}>
            <p className="mb-0 text-center">Families Supported</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={14000} duration={3} suffix="+" /></h2>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Who Can Benefit?</h2>
          <p className=''>
            All Pakistanis who really need a safe place to live can apply through Travel Embassy Housing Applications. It's perfect for people and families who want to build, buy, or fix up a house.
          </p>
          <ul>
            <li><strong>Low-Income Families:</strong> Perfect for those aiming to buy, build, or improve a home but lacking resources.</li>
            <li><strong>Minimal Paperwork:</strong>Just provide your CNIC, proof of residence, and a brief housing plan.</li>
            <li><strong>Community Engagement Matters:</strong> Being active in your community can enhance your application.</li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3">
          <img
            src={asaanQarz14}
            alt="Housing Help"
            className="img-fluid wm-100 h-80 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 text-white p-0" style={{ maxWidth: "100%", backgroundColor:'#FF7729' }}>
            <p className="mb-0 text-center">HOMES BUILT</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={8000} duration={3} suffix="+" /></h2>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-12">
          <h2 className="fw-bold mb-3 text-center">How to Get Started with Travel Embassy Housing Applications</h2>
          <ul>
            <li><strong>Check Your Eligibility:</strong> Ensure you are a Pakistani national in need of a safe home.</li>
            <li><strong>Prepare Your Documents:</strong> Gather your ID, proof of income, and a brief plan for building, buying, or renovating your home.</li>
            <li><strong>Submit Your Application:</strong> Apply online or visit the nearest Travel Embassy center.</li>
            <li><strong>Application Review:</strong> Your application will be carefully assessed and approved quickly if it meets the criteria.</li>
            <li><strong>Receive Your Funds:</strong> Once approved, funds are released, allowing you to start your home project immediately.</li>
          </ul>
        </div>
        
      </div>
      <div className="row mb-5 align-items-center">
        <div className="col-12">
          <h2 className="fw-bold mb-3 text-center">Make Your Dream Home a Reality Today</h2>
          <p className=''>Travel Embassy is more than a service. It’s a lifeline for families dreaming of stability and a safe place to call home.</p>
        </div>

      </div>
    </div>
  );
};

export default akhuwatHouseLoan;

