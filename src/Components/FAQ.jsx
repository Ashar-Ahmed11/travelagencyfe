import React, { useState } from 'react';
import coverImage from '../Images/faq1.png'

export default function VisaFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs =[
  {
    "question": "What is a work visa for Canada?",
    "answer": "A Canadian work visa is a legal document that lets people from other countries work in Canada for a set amount of time. Some permits are only good for one employer, while others let you work for more than one employer. Our consulting service can help you figure out which form of visa is best for your career ambitions."
  },
  {
    "question": "How can I get a work visa for Canada?",
    "answer": "Most of the time, you need a valid work offer from a Canadian firm to apply. In some situations, you need a Labour Market Impact Assessment (LMIA) to make sure that hiring a foreign worker won't have an effect on the job market in your area. You can submit your application online using the IRCC portal or at an authorised visa application center after you have all the paperwork ready. Travel Agency helps you fill out your application correctly and completely by guiding you through each step."
  },
  {
    "question": "How long does it take to receive a visa to work in Canada?",
    "answer": "The amount of time it takes to process your application depends on the type of work permit you want and the country you are applying from. It can take anywhere from a few weeks to a few months for standard applications to be processed. However, Express Entry applications are normally processed more quickly. Our team will help you keep track of your progress and stay up to date."
  },
  {
    "question": "Can the Travel Agency assist me get a job in another country?",
    "answer": "YYes, Travel Agency can help you apply for jobs in Canada, Dubai, Saudi Arabia, and Bahrain. We help with checking eligibility, getting documents ready, sending in applications, and keeping track of their status to make the process go as smoothly and quickly as possible."
  },
  {
    "question": "Do I need to come to your office to get help?",
    "answer": "No, you can start your application online and get complete help with it. We offer remote help with reviewing documents, getting a visa, and applying for jobs, which makes it easy for people all around Pakistan to get help."
  },
  {
    "question": "Why should I use Travel Agency to apply for my job visa?",
    "answer": "At every step, Travel Agency gives you clear, honest, and expert advice. We help people get jobs in Canada, Dubai, Saudi Arabia, and Bahrain, as well as police jobs in Bahrain. We make sure that your application is full, correct, and in line with current immigration rules to give you the best chance of success."
  }
]


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* Carousel Section */}
      <div id="contactCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div 
              className="d-flex align-items-center justify-content-center text-white text-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
                padding: '60px 20px'
              }}
            >
              <div className="container">
                <h1 className="display-4 fw-bold mb-4">Travel Agency FAQ: Everything You Need to Know About Jobs and Visas Abroad</h1>
                <p className="mb-2">The FAQ section is meant to answer the most common questions about getting a job in Canada, applying for a job online in Dubai, finding work in Saudi Arabia, and other international career alternatives. We give you clear and reliable advice so you may move forward with confidence at every step.</p>
                {/* <p className="mb-2">From understanding visa types and document requirements to learning about processing times and LMIA details,</p>
                <p className="mb-2">we provide clear, reliable information to guide you through each stage of the application process.</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left side - Image */}
            <div className="col-lg-5 mb-4 mb-lg-0 text-center">
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/skills-1.png" 
                alt="Family with luggage" 
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Right side - FAQ */}
            <div className="col-lg-7">
              <div className="mb-2" style={{ color: '#666', fontSize: '14px', fontWeight: '500' }}>
                Frequent Answer Question
              </div>
              <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#333' }}>
                Fast Answers to Your Visa Questions
              </h2>

              <div className="accordion" id="visaAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="card border-0 mb-3" style={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <div className="card-header bg-white border-0 p-0">
                      <button
                        className="btn btn-link text-decoration-none w-100 text-start d-flex justify-content-between align-items-center p-3"
                        style={{ color: '#333', fontSize: '16px', fontWeight: '600' }}
                        onClick={() => toggleFAQ(index)}
                      >
                        <span>{faq.question}</span>
                        <span style={{ fontSize: '20px', color: '#999', transition: 'transform 0.3s', transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          {openIndex === index ? '−' : '+'}
                        </span>
                      </button>
                    </div>
                    <div 
                      className="collapse show"
                      style={{ 
                        display: openIndex === index ? 'block' : 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div className="card-body pt-0 px-3 pb-3" style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
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
    </>
  );
}