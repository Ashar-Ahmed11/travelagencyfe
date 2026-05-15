import React from 'react';

const WorkProcess = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <p className=" mb-2" style={{borderLeft: '3px solid #1175C1', color:'#1175C1', paddingLeft: '10px', display: 'inline-block'}}>
          How to Work
        </p>
        <h2 className="fw-bold mb-3">Easy Procedure for a Canada Visa</h2>
        <p className="text-muted">
          Getting a job visa for Canada is easy and hassle-free with clear instructions and professional assistance.
        </p>
      </div>

      <div className="row g-4">
        {/* Personalized Guidance */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-52.png" 
                alt="Affordable Consultancy"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Tailored Assistance for Your Job Visa to Canada</h5>
            <p className="text-muted small">
              Get personalized advice from knowledgeable consultants so you can get ready with assurance and clarity.
            </p>
          </div>
        </div>

        {/* Faster Processing Support */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-51.png" 
                alt="Affordable Consultancy"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Quick Help with Visa Applications</h5>
            <p className="text-muted small">
              Get assistance whenever you need it, along with timely information and a procedure that makes sure your application proceeds smoothly.
            </p>
          </div>
        </div>

        {/* Affordable Consultancy */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-50.png" 
                alt="Affordable Consultancy"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Reasonably priced and useful consulting</h5>
            <p className="text-muted small">
              Get help for your Canada visa from knowledgeable professionals at affordable prices, providing trustworthy advice without exorbitant fees.
            </p>
          </div>
        </div>

        {/* Trusted Worldwide */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-53.png" 
                alt="Affordable Consultancy"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Worldwide Reliability for Canada Visa Success</h5>
            <p className="text-muted small">
              Become one of the thousands of applicants who rely on our dependable, competent, and transparent assistance with their Canada job visa application process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;