import React from 'react'
import coverImage1 from '../Images/abus2.png'
import coverImage2 from '../Images/aboutus2.jpeg'
import coverImage3 from '../Images/aboutuscarousal.png'

const VisaAboutUs = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div id="contactCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div 
              className="d-flex align-items-center justify-content-center text-white text-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${coverImage3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
                padding: '60px 20px'
              }}
            >
              <div className="container">
                <h1 className="display-4 fw-bold mb-4">About us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src={coverImage1}
              alt="Visa Documents"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6">
            <p className="text-muted mb-2">About Us</p>
            <h2 className="fw-bold mb-3">Making Your Dream of Working Abroad a Reality</h2>
            <p className="text-muted mb-3">
              At Travel Agency 4u, we think that your dream of working overseas can come true with the correct advice. Our goal is to make the application process for jobs and visas easy, transparent, and stress-free. We provide Pakistani candidates with employment possibilities in Bahrain, Dubai, and Canada. 
            </p>
            <p className="text-muted mb-3">
              Our knowledgeable advisors assist you at every stage because we recognize the difficulties associated with applying for jobs in Saudi Arabia or for police positions in Bahrain. We examine your files, offer tailored advice, and make sure your applications are comprehensive and organized. Our goal is to provide you with all the tools you need to confidently pursue career possibilities abroad.
            </p>
            <p className="text-muted mb-4">
              Additionally, we help you comprehend the criteria for a visa and make sure that all of your paperwork is completed accurately and competently.
            </p>

            <div className="row mb-4">
              <div className="col-md-6 mb-2">
                <span className="text-warning me-2">✓</span>
                <span className="text-muted">5 Years of Experience</span>
              </div>
              <div className="col-md-6 mb-2">
                <span className="text-warning me-2">✓</span>
                <span className="text-muted">Quick Answers to Questions</span>
              </div>
              <div className="col-md-6 mb-2">
                <span className="text-warning me-2">✓</span>
                <span className="text-muted">Team Members Who Are Experts</span>
              </div>
              <div className="col-md-6 mb-2">
                <span className="text-warning me-2">✓</span>
                <span className="text-muted">Services of High Quality</span>
              </div>
            </div>

            <button className="btn text-white px-4" style={{backgroundColor:'#1175C1'}}>Learn more</button>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-5" style={{backgroundColor: '#2d1b4e'}}>
        <div className="container">
          <div className="text-center text-white mb-5">
            <p className="mb-2">Unlock Your Visa Potential by Taking the First Step</p>
            <h2 className="fw-bold">Our Goal</h2>
          </div>

          <div className="row g-4">
            {/* Our Mission */}
            <div className="col-lg-4">
              <div className="card h-100 p-4">
                <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                  <img src="https://canadajobguide.com/wp-content/uploads/2025/08/Glyph_-undefined.png" alt="" />
                </div>
                <h5 className="fw-bold mb-3">Our Goal</h5>
                <p className="text-muted small">
                  Opening doors to international employment prospects is the mission of Travel Agency 4u. For anyone looking for online job applications, driving jobs in Dubai, teaching jobs in Bahrain, and more, we offer straightforward, expert, and customized advice. Our assistance covers every step of the process, enabling you to confidently and clearly advance toward your professional objectives.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="col-lg-4">
              <div className="card h-100 p-4" style={{backgroundColor: '#1175C1', color: 'white'}}>
                <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src="https://canadajobguide.com/wp-content/uploads/2025/08/eye.png" alt="" />
                </div>
                <h5 className="fw-bold mb-3">Our Vision</h5>
                <p className="small">
                  The goal of Travel Agency 4u is to establish itself as a reliable online job application platform in Canada, Dubai, and other nations. In order to help you succeed, we streamline the difficult visa and employment application process by offering clear instructions, paperwork support, and helpful counsel.
                </p>
              </div>
            </div>

            {/* Our Achievements */}
            <div className="col-lg-4">
              <div className="card h-100 p-4">
                <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                  <img src="https://canadajobguide.com/wp-content/uploads/2025/08/1.png" alt="" />
                </div>
                <h5 className="fw-bold mb-3">Our Successes</h5>
                <p className="text-muted small">
                  We have helped hundreds of people land jobs at Bahrain airports, jobs in Dubai for Pakistani candidates, Bahrain hotel openings, and other worldwide career chances. By putting clients first and offering trustworthy advice all along the way, Travel Agency 4u has established a solid reputation for accuracy, professionalism, and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hassle-Free Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3">Easy Application Procedure</h2>
            <p className="mb-2">
              Applying for foreign employment and visas is made simple with Travel Agency 4u. In order to ensure that you are prepared to apply for opportunities in Saudi Arabia, Bahrain, and at the U.S. Embassy in Bahrain, our experts assist you at every stage, from initial document preparation to final submission.
            </p>
            <p className="mb-4">
              Take bold steps toward developing your worldwide career and join thousands of successful applicants who have relied on our advice.
            </p>
            <button className="btn  text-white px-4" style={{backgroundColor:'#1175C1'}}>Contact Now</button>
          </div>
          <div className="col-lg-6">
            <img 
              src={coverImage2}
              alt="Canadian Flag"
              className="img-fluid rounded"
            />
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

export default VisaAboutUs
