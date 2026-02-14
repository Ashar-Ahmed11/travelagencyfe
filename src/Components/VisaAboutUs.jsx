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
            <h2 className="fw-bold mb-3">We Make Your Dreams of Working Abroad Come True</h2>
            <p className="text-muted mb-3">
              We at Travel Agency think that the appropriate advice may make your dream of working abroad come true. Our goal is to make the process of getting a visa and a job as easy, straightforward, and stress-free as possible. We have employment in Canada, Dubai, and Bahrain for Pakistani applicants. We know how hard it is to apply for jobs in Saudi Arabia or as a police officer in Bahrain, and our expert advisors are here to help you every step of the way. We check your papers, provide you individual advice, and make sure your applications are full and well-organized. Our goal is to provide you the tools you need to boldly go after your ideal overseas jobs.
            </p>
            <p className="text-muted mb-3">
              We also help you understand what you need to do to get a visa and make sure you fill out all the documents correctly.
            </p>
            <p className="text-muted mb-4">
              Please note that Travel Agency is a private business. We are not connected to the Canadian government and cannot guarantee that your visa will be approved.
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
                  Travel Agency is committed to making job opportunities around the world available. We offer precise, professional, and tailored advice to people looking for online job applications, driving jobs in Dubai, teaching jobs in Bahrain, and more. Our advice covers the whole process, so you may clearly and confidently focus on your goals.
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
                  Travel Agency wants to be the most reliable place to get online job applications for Canada, Dubai, and other countries. We make the complicated process of getting a visa and a job easier by giving you clear instructions, helping you with your paperwork, and giving you useful advice to help you succeed.
                </p>
              </div>
            </div>

            {/* Our Achievements */}
            <div className="col-lg-4">
              <div className="card h-100 p-4">
                <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                  <img src="https://canadajobguide.com/wp-content/uploads/2025/08/1.png" alt="" />
                </div>
                <h5 className="fw-bold mb-3">What We've Done</h5>
                <p className="text-muted small">
                  We have helped hundreds of people get jobs at Bahrain airport, Dubai roles for Pakistani applicants, Bahrain hotel vacancies, and other exciting job openings throughout the world. Travel Agency has a great reputation for being trustworthy, accurate, and professional since we focus on our clients and give them dependable advice.
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
            <h2 className="fw-bold mb-3">Get an Easy Application</h2>
            <p className="mb-4">
              Travel Agency makes it easy to apply for jobs and visas in other countries. Our advisers help you with everything from getting the first documents ready to submitting them, making sure you're ready to apply for jobs in Saudi Arabia, Bahrain, and the US Embassy in Bahrain. Join the thousands who have successfully applied with our help and take confident steps toward your worldwide career.
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
