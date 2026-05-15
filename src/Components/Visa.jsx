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
                <h1 className="display-4 fw-bold mb-4">Visa Services: Your Reliable Partner for International Job</h1>
                <p className="mb-2">
                  Opportunities Travel Agency 4u streamlines and simplifies the process of applying for jobs in Canada, Dubai, and other international locations. Our knowledgeable staff carefully examines your documentation, offers individualized advice, and guarantees that every aspect of your visa application is correct and well-prepared. We place a high value on clarity and confidence, enabling you to pursue international job opportunities without worry or confusion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Cards Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Full-Service Visa Solutions</h2>
          <p className="text-muted">
            Whether you are applying for jobs in Bahrain, Saudi Arabia, or at the U.S. Embassy in Bahrain, we assist you at every step of the visa application process. Expert advice, thorough, step-by-step document analysis, and individualized support based on your professional goals are all included in our service.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Visa Advice */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 p-4">
              <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                <img src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-35.png" alt="" />
              </div>
              <h5 className="fw-bold mb-3">Advice on Visas</h5>
              <p className="small">
                Get individualized assistance in choosing the best visa route for your global career. Travel Agency 4u assists you in comprehending immigration regulations and investigating employment prospects in Canada, Dubai, and other locations, including driving positions in Dubai.
              </p>
            </div>
          </div>

          {/* Online Application Assistance */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-1 p-4">
              <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                <img src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-36-1.png" alt="" />
              </div>
              <h5 className="fw-bold mb-3">Online Assistance for Applications</h5>
              <p className="text-muted small">
                We provide you with clear instructions and committed assistance at every stage of the visa application procedure. Our staff makes sure your applications are accurate, your paperwork is complete, and you are ready to apply for jobs with the Bahrain police, hotels, and educational institutions.
              </p>
            </div>
          </div>

          {/* Customer Support */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-1 p-4">
              <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                <img src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-35-1.png" alt="" />
              </div>
              <h5 className="fw-bold mb-3">Customer Service Support</h5>
              <p className="text-muted small">
                Our committed staff is always on hand to offer support and direction. By carefully examining your documents and responding to all of your questions, we make sure your visa application procedure stays easy and stress-free.
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
                Do you intend to work overseas? Travel Agency 4u helps people apply for work visas to well-known places including Malaysia, Canada, Saudi Arabia, the UAE, Oman, and more. By outlining the needs in detail and assisting them at every stage of the procedure, we assist both experienced and unskilled individuals. Opportunities include driving employment in Dubai, hotel jobs in Bahrain, and jobs in Dubai for Pakistani candidates.
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
                  <h2 className="fw-bold mb-4">Easy Applications for Visas</h2>
                  <p className="mb-0">
                    We streamline difficult visa procedures so you can continue concentrating on your professional objectives. To make sure your application is precise, understandable, and customized to your requirements, our knowledgeable staff offers advice, examines your supporting documentation, and helps you every step of the way. We help you every step of the way, from online job applications to Bahraini airport jobs.

In order to make wise choices, clients are also urged to confirm all information with reputable sources.
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
