import React from 'react';

const WorkProcess = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <p className=" mb-2" style={{borderLeft: '3px solid #1175C1', color:'#1175C1', paddingLeft: '10px', display: 'inline-block'}}>
          How to Work
        </p>
        <h2 className="fw-bold mb-3">Our Easy Canada Visa Journey</h2>
        <p className="text-muted">
          With clear processes and experienced help, getting a job visa for Canada will be easy and stress-free.
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
            <h5 className="fw-bold mb-3">Personalized Guidance for Your Canada Job Visa</h5>
            <p className="text-muted small">
              "Get personalized assistance from experienced advisors who will help you get ready with confidence and clarity."
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
            <h5 className="fw-bold mb-3">Help with your visa application that speeds up the process</h5>
            <p className="text-muted small">
              "Get help when you need it, smart updates, and a procedure that is meant to keep things moving along quickly."
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
            <h5 className="fw-bold mb-3">Consulting that is cheap and useful</h5>
            <p className="text-muted small">
              "Get help with your Canada visa from experts at reasonable prices. They will provide you reliable advice without charging you a lot."
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
            <h5 className="fw-bold mb-3">Trusted Around the World for Canada Visa Success</h5>
            <p className="text-muted small">
              Join the thousands of people who rely on our clear, professional, and trustworthy help with their Canada job visa applications. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;