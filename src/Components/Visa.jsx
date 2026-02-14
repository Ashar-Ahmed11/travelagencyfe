import React from 'react'
import VisaImg from '../Images/m1.png'
import VisaImg1 from '../Images/m2.png'

const Visa = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div id="contactCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div 
              className="d-flex align-items-center justify-content-center text-white text-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${VisaImg1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
                padding: '60px 20px'
              }}
            >
              <div className="container">
                <h1 className="display-4 fw-bold mb-4">Visa Services: Your Reliable Partner for Job Opportunities Around the World</h1>
                <p className="mb-2">
                  Travel Agency makes it easy and stress-free to apply for jobs in Canada, Dubai, and other places across the world. Our expert team checks your paperwork, gives you specific advice, and makes sure that every part of your visa application is correct and clear. We focus on making things clear and giving you confidence so you may look for jobs around the world without getting confused.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Cards Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Complete Visa Solutions</h2>
          <p className="text-muted">
            We help with every step of the visa application process, whether you're looking for a job in Bahrain, Saudi Arabia, or the US Embassy in Bahrain. We offer experienced advice, a step-by-step evaluation of your documents, and help that is specific to your career goals.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Visa Advice */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 p-4">
              <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                <img src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-35.png" alt="" />
              </div>
              <h5 className="fw-bold mb-3">Visa Advice</h5>
              <p className="small">
                Get individualized help picking the correct visa path for your career abroad. Travel Agency can assist you learn about immigration rules and how to get jobs in Canada, Dubai, and other places, like driving jobs in Dubai.
              </p>
            </div>
          </div>

          {/* Online Application Assistance */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-1 p-4">
              <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                <img src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-36-1.png" alt="" />
              </div>
              <h5 className="fw-bold mb-3">Help with Online Applications</h5>
              <p className="text-muted small">
                We help you with every step of the visa application process by giving you clear information and support. Our team makes sure that your paperwork is comprehensive, your applications are free of mistakes, and you are ready to apply for jobs with the Bahrain police, hotels, and schools.
              </p>
            </div>
          </div>

          {/* Customer Support */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-1 p-4">
              <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                <img src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-35-1.png" alt="" />
              </div>
              <h5 className="fw-bold mb-3">Help for Customers</h5>
              <p className="text-muted small">
                Our devoted crew is always ready to help and give advice. We make sure that your visa application process is easy and stress-free by checking documents and answering questions.
              </p>
            </div>
          </div>

          {/* Work Visa Guidance */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-1 p-4">
              <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                <img src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-35-2.png" alt="" />
              </div>
              <h5 className="fw-bold mb-3">Advice on Work Visas</h5>
              <p className="text-muted small">
                Are you planning to work abroad? Travel Agency helps people apply for work visas to popular places including Canada, Saudi Arabia, the UAE, Oman, Malaysia, and more. We help both skilled and unskilled workers understand what they need to do to get a job in another country and walk them through the process. Opportunities include Dubai jobs for Pakistani applicants, car driver jobs in Dubai, and hotel jobs in Bahrain.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hassle-Free Applications Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <div 
              className="position-relative text-white p-5 rounded"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${VisaImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px'
              }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="fw-bold mb-4">No Trouble with Visa Applications</h2>
                  <p className="mb-0">
                    We make complicated visa processes easier so you may focus on your career goals. We make sure your application is correct, clear, and personalized to your needs by giving you expert advice, reviewing your documents, and walking you through the process step by step. We help you at every step, from applying for jobs online to working at the airport in Bahrain. Clients are told to check all information with official sources so they may make smart choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-5" style={{backgroundColor: '#1175C1'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-white mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">Stay Informed With Our Newsletter</h2>
              <p className="mb-0">Get updated information, news, insight or promotions.</p>
            </div>
            <div className="col-lg-6">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control py-3" 
                  placeholder="Enter your email address"
                  style={{borderRadius: '5px 0 0 5px'}}
                />
                <button 
                  className="btn btn-dark px-4" 
                  type="button"
                  style={{borderRadius: '0 5px 5px 0'}}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Visa
