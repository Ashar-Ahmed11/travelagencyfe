import React from 'react';
import Akhuwat12 from '../../Images/l1.png'
import { getCdnUrl } from '../../utils/cdnImage'

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">Get Your Dream Job Abroad by Applying Online.</h1>
            
            <p className="mb-4 fw-bold mt-1">
            Are you looking for intriguing possibilities in Saudi Arabia, Canada, Bahrain, or Dubai? Applying online for jobs in teaching, security, driving, and hospitality is quick and simple with our platform. Find job opportunities for Pakistani candidates in Bahrain, Saudi Arabia, Canada, and Dubai all at one location.
            </p>
            <p className="mb-4 fw-bold mt-1">
            You can easily and stress-free apply for employment in Canada, Dubai, Bahrain, and security-related industries with our service. Track your application, receive clear assistance, and start down the path to a lucrative global career.
            </p>
            
            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
              By taking part or making a contribution, you also join a larger initiative that promotes kindness and supports communities, demonstrating how even little deeds can have a significant impact on someone's life.

              </p>
            </div>
          </div>
          
          <div className="col-lg-7 mt-5">
            <img 
              src={getCdnUrl(Akhuwat12)}
              alt="Travel Agency 4u Job Apply Details in Urdu" 
              className="card-img-top "
              // style={{height:"500px"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default AkhuwatLoanScheme;