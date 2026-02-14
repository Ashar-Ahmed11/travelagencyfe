import React from 'react';
import Akhuwat12 from '../../Images/l1.png'
import { getCdnUrl } from '../../utils/cdnImage'

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">Get Your Ideal Job Abroad by Applying Online Right Away</h1>
            
            <p className="mb-4 fw-bold mt-1">
            Are you looking for intriguing possibilities in Bahrain, Dubai, Saudi Arabia, or Canada? We make it simple and quick to apply online for jobs in teaching, security, driving, and hotels. Find online job openings in Canada, Saudi Arabia, Dubai, or Bahrain for Pakistani candidates in one convenient location.
            </p>
            <p className="mb-4 fw-bold mt-1">
            With the help of our platform, you can stress-free apply for employment in Canada, Dubai, Bahrain, and the police. Follow up on your application, get precise instructions, and start down the path to a rewarding global career.
            </p>
            
            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
              By taking part or making a donation, you become a part of a movement that uplifts communities and promotes compassion, demonstrating that even little deeds may have a profound impact on someone's life. 

              </p>
            </div>
          </div>
          
          <div className="col-lg-7 mt-5">
            <img 
              src={getCdnUrl(Akhuwat12)}
              alt="Travel Agency Job Apply Details in Urdu" 
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