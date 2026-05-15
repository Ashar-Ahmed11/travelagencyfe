 import React from 'react'
 import ApplyLoanForm from './homeComponents/ApplyLoanForm'
 import ApplyNowImg from "../Images/applynow.png"
 
 
 const ApplyNow = () => {
   return (
     <div>
          <div id="contactCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div 
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ApplyNowImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              padding: '60px 20px'
            }}
          >
            <div className="container">
              <h1 className="display-4 fw-bold mb-4">Travel Agency 4u: Your Passport to International Employment Possibilities</h1>
              <h5 className="mb-3">Are you trying to find employment possibilities in Dubai for Pakistani candidates or online job applications in Canada? Are you looking for work in Bahrain or are you unsure about how to apply for jobs in Saudi Arabia, such as driving or police positions in Dubai?</h5>
              <p className="mb-2">Travel Agency 4u offers professional support during your online application process. To help you apply for jobs in Dubai or hotel positions in Bahrain without stress, our staff provides straightforward, step-by-step instructions, expert advice, and individualized support.</p>
              <p className="mb-2">We are here to respond to your inquiries, examine your supporting documentation, and make sure you can confidently submit your applications.</p>
              <p className="small fst-italic">
                Disclaimer: Travel Agency 4u is a private company. We do not promise <br></br>employment or visa approval, nor are we associated with any government agencies. 
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div 
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=400&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              padding: '60px 20px'
            }}
          >
            <div className="container">
              <h1 className="display-4 fw-bold mb-4">Initiate Your Global Career Here- Start Visa Application Today</h1>
              <h5 className="mb-3">Professional Visa Consultancy Services</h5>
              <p className="mb-2">Expert guidance for your Canadian immigration journey</p>
              <p className="mb-2">Personalized support tailored to your needs</p>
              <p className="mb-4">Let us help you achieve your Canadian dream</p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div 
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=400&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              padding: '60px 20px'
            }}
          >
            <div className="container">
              <h1 className="display-4 fw-bold mb-4">Reach Out Now</h1>
              <h5 className="mb-3">We're Here to Help</h5>
              <p className="mb-2">Connect with our experienced consultants</p>
              <p className="mb-2">Get answers to all your visa questions</p>
              <p className="mb-4">Start your application process with confidence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#contactCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#contactCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}

      {/* Carousel Indicators */}
      {/* <div className="carousel-indicators">
        <button type="button" data-bs-target="#contactCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#contactCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#contactCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div> */}
    </div>

<ApplyLoanForm/>

<div>
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

     </div>
   )
 }
 
 export default ApplyNow
 