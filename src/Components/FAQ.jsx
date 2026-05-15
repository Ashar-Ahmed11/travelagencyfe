import React, { useState } from 'react';
import coverImage from '../Images/faq1.png'

export default function VisaFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

const faqs = [
  {
    "question": "What is a Canadian work visa?",
    "answer": "A Canadian work visa is an official permit that allows foreign nationals to work in Canada for a specific period. Some permits are tied to a single employer, while others allow you to work for multiple employers. Our consultancy service can guide you in choosing the right visa option based on your career goals."
  },
  {
    "question": "How do I apply for a Canadian work visa?",
    "answer": "In most cases, you need a valid job offer from a Canadian employer before applying. Certain applications also require a Labour Market Impact Assessment (LMIA) to confirm that employing a foreign worker will not negatively affect the local job market. Once your documents are prepared, you can apply online through the IRCC portal or via an approved visa application center. Travel Agency 4u supports you through every stage to ensure your application is completed accurately."
  },
  {
    "question": "How much time does it take to get a Canada work visa?",
    "answer": "Processing times vary depending on the work permit category and the country from which you apply. Standard applications may take several weeks or even months, while Express Entry applications are usually processed faster. Our team helps you stay informed and monitor your application progress throughout the process."
  },
  {
    "question": "Can Travel Agency 4u help me find overseas job opportunities?",
    "answer": "Yes, Travel Agency 4u assists applicants in applying for jobs in Canada, Dubai, Saudi Arabia, and Bahrain. We provide support with eligibility checks, document preparation, application submission, and status tracking to make the process smooth and efficient."
  },
  {
    "question": "Is it necessary to visit your office for assistance?",
    "answer": "No, you can begin and complete your application process online. We provide remote assistance for document reviews, visa guidance, and job applications, making our services accessible to applicants across Pakistan."
  },
  {
    "question": "Why should I choose Travel Agency 4u for my work visa application?",
    "answer": "Travel Agency 4u offers transparent, reliable, and professional guidance throughout the entire process. We assist applicants seeking jobs in Canada, Dubai, Saudi Arabia, Bahrain, and even Bahrain police positions. Our team ensures that your application is complete, accurate, and aligned with the latest immigration requirements to improve your chances of success."
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
               <h1 className="display-4 fw-bold mb-4">
  Travel Agency 4u FAQ: Your Complete Guide to International Jobs and Visa Applications
</h1>

<p className="mb-2">
  Our FAQ section is designed to answer the most frequently asked questions about finding jobs in Canada, applying for jobs online in Dubai, securing employment in Saudi Arabia, and exploring other international career opportunities. We provide clear, dependable guidance to help you move ahead with confidence throughout every stage of the process.
</p>
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