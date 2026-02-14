import React from 'react'
import b1 from '../Images/b1.jpg'
import b2 from '../Images/b2.jpg'
import b3 from '../Images/b3.jpg'
import b4 from '../Images/blog4.jpg'
import b5 from '../Images/blog5.jpg'
import Blogimg from '../Images/article.png'



const Blog = () => {
  return (
    <div>
         <div id="contactCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div 
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Blogimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              padding: '60px 20px'
            }}
          >
            <div className="container">
              <h1 className="display-4 fw-bold mb-4">Travel Agency Blog and Ideas</h1>
              <h5>Stay up to date on visa applications, jobs abroad, and opportunities around the world.</h5>
              <p className="mb-2">“Our blog at Travel Agency keeps you up to date on the latest news, useful advice, and professional advice on applying for jobs online, finding jobs in Canada, Dubai, Saudi Arabia, and other places around the world. We give you reliable information about immigration policies, work permits, study abroad possibilities, and job opportunities around the world so you may make smart choices about your future abroad.”

 

</p>
              {/* <h5 className="mb-3">Need Help with Canada Job Visas?</h5>
              <p className="mb-2">At Canada Job Guide, we provide consultancy services,</p>
              <p className="mb-2">offering clear information and step-by-step support based on publicly available guidelines.</p>
              <p className="mb-4">Our team is here to assist you with personalized advice and guidance.</p>
              <p className="small fst-italic">
                Disclaimer: Canada Job Guide is a private consultancy. We are not affiliated with<br/>
                the Government of Canada and do not guarantee visa approval.
              </p> */}
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        {/* <div className="carousel-item">
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
              <h1 className="display-4 fw-bold mb-4">Get Started Today</h1>
              <h5 className="mb-3">Professional Visa Consultancy Services</h5>
              <p className="mb-2">Expert guidance for your Canadian immigration journey</p>
              <p className="mb-2">Personalized support tailored to your needs</p>
              <p className="mb-4">Let us help you achieve your Canadian dream</p>
            </div>
          </div>
        </div> */}

        {/* Slide 3 */}
        {/* <div className="carousel-item">
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
        </div> */}
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
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Find out about our newest articles</h2>
        <h2 className="fw-bold"> and Expert Advice</h2>
      </div>

      <div className="row g-4 justify-content-center">
        {/* Blog 1 - Lee Cadesky */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <img 
              src={b3}
              className="card-img-top" 
              alt="Restaurant"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3" style={{color: '#1175C1'}}>
                Step-by-Step Guide to Getting a Canadian Job Visa
              </h5>
              <p className="text-muted small">
                Getting a job visa for Canada could seem hard, but Travel Agency makes it easy. Find out how to have important papers ready, like your passport, employment offer letter, proof of work experience, and school certificates. Know what employers want and what LMIA rules are so you can apply with confidence. Our consulting service makes sure you keep organised, up to date, and ready to get the job you want.
              </p>
            </div>
          </div>
        </div>

        {/* Blog 2 - Visible Support */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <img 
              src={b1}
              className="card-img-top" 
              alt="Visa Documents"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3" style={{color: '#1175C1'}}>
                How to Get Started with Dubai Jobs for Pakistani Applicants
              </h5>
              <p className="text-muted small">
                Are you going to work in Dubai? We help you identify reliable job vacancies and write great applications for jobs in a wide range of fields, from driving to working for a corporation. To increase your chances of getting a job in the UAE, learn how to prepare for interviews, gather the right paperwork, and meet the qualifying requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Blog 3 - How To Apply */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <img 
              src={b2}
              className="card-img-top" 
              alt="Passports and Flags"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3" style={{color: '#1175C1'}}>
                Full online application guide for jobs in Saudi Arabia
              </h5>
              <p className="text-muted small">
                Saudi Arabia has a lot of job openings for both skilled and unskilled individuals. Our site tells you how to apply for employment in Saudi Arabia, like hotel and administrative jobs, online. Find out how to fill out applications correctly, meet visa requirements, and get to know the culture at work so that your time abroad goes well and is enjoyable.
              </p>
            </div>
          </div>
        </div>
        {/* Blog 4 - How To Apply */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <img 
              src={b4}
              className="card-img-top" 
              alt="Passports and Flags"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3" style={{color: '#1175C1'}}>
                Job Applications in Bahrain: Chances for Pakistani Workers
              </h5>
              <p className="text-muted small">
                Find helpful tips for applying for employment in Bahrain, such as police officer, security guard, teacher, and hotel jobs. Travel Agency gives you useful information about who may work in Bahrain, what documents you need, and how to find a job there.
              </p>
            </div>
          </div>
        </div>
        {/* Blog 5 - How To Apply */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <img 
              src={b5}
              className="card-img-top" 
              alt="Passports and Flags"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3" style={{color: '#1175C1'}}>
                Updates from experts and career advice for people who work abroad
              </h5>
              <p className="text-muted small">
                We also write about changes to immigration laws, updates on international travel, and job opportunities around the world. Our precise recommendations make it easier to get work permits and visas for positions in Canada, Dubai, or US Embassy roles in Bahrain. This will help you get closer to your foreign career ambitions. 
              </p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
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

export default Blog
