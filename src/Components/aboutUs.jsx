
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Infographic from '../Images/Infograph.png'
// import aboutUsImg from '../Images/Akhuwat Foundation loan service.jpg'
import asaanQarz15 from '../Images/newAkhuwat20.jpg'
import asaanQarz16 from '../Images/newAkhuwat21.jpg'
import asaanQarz17 from '../Images/newAkhuwat22.jpg'
import { getCdnUrl } from '../utils/cdnImage'

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'21px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">About Us</h1>
              <h2 className="fw-bold mb-4">Your Gateway to Global Opportunities
</h2>

              <p className="">
              At Travel Embassy, we believe the right guidance can transform your dream of working abroad into reality. From Canada online jobs to Dubai positions and Bahrain opportunities for Pakistani applicants, our mission is to make your visa and job application process simple, clear, and stress-free. We understand the challenges of applying for Saudi Arabia jobs or Bahrain police roles, and our experienced consultants are here to support you every step of the way. We review your documents, offer personalized advice, and ensure your applications are complete and well-organized. Our aim is to empower you to confidently pursue your dream international opportunities.
              </p>
              <p className="mb-4">
              We also help you understand visa requirements and guide you in accurately completing all necessary forms.
              </p>
              <div className="my-5 text-center p-4">
                <img 
                  src={getCdnUrl(asaanQarz15)}
                  alt="Travel Embassy Job Apply Logo" 
                  className="img-fluid rounded shadow-sm mw-100 h-100 card-img-top" 
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">What We Do: Empowering Every Step of Your Journey
</h2>

              <p className="mb-4">
              At Travel Embassy, our focus is on people. We believe that everyone deserves access to simple, manageable applications. Our services remove barriers, simplify the process, and provide flexible solutions that meet your needs.


              </p>

              {/* <p className="mb-4">
              We understand how hard it can be to apply, especially for people in Pakistan who are worried about their future. Because of this, we are dedicated to giving services that are simple, quick, and clear. Our goal is to get rid of obstacles by giving each customer custom solutions that meet their specific needs.
              </p> */}

              <h2 className="fw-bold mt-5 mb-4">Why Travel Embassy Job Apply is the Best Option?</h2>

              <ol className="fw-light mx-5">
                <li>Quick Approval Process:</li>
                <p>We understand how urgent money matters can be. Our streamlined application ensures you get the funds you need fast, without the frustration of traditional banking delays.</p>
                <li>Diverse Application Options:</li>
                <p>From personal and business to student and instant applications, we offer solutions for every need.</p>
                <li>Transparent and Honest:</li>
                <p>There are no hidden terms. You’ll always know exactly what to expect.</p>
                <li>Personalized Support:</li>
                <p>Our team takes the time to understand your situation and tailor repayment plans that work for you.</p>
              </ol>

              <h2 className="fw-bold mt-5 mb-4">Our Founder: A Visionary for Financial Inclusion</h2>

              <p className="mb-4">
              Travel Embassy is committed to empowering communities and reducing barriers. Our focus is on delivering life-changing opportunities that help thousands achieve stability and independence.

              </p>
              <div className="my-5 text-center">
                <img 
                  src={getCdnUrl(asaanQarz16)}
                  alt="Travel Embassy Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
              <p className="mb-4">
              Our vision is to make fair, simple, and accessible funding available to everyone. We understand Pakistan's financial challenges and shape our services to help people across the country.
              </p>


              <h2 className="fw-bold mt-5 mb-4">Our Core Values: Guided by Trust and Compassion</h2>

              <ul className="fw-light mx-5">
                <li>Honesty at Every Step: We build trust through transparency, making sure clients understand all terms clearly.</li>
                <li>Customer-Centric Approach: Every solution is tailored to meet your unique financial needs.</li>
                <li>Innovation: We continually adopt new financial tools and technology to better serve our clients.</li>
                <li>Social Responsibility: Beyond loans, we strive to strengthen communities by promoting economic growth and providing sustainable, long-term solutions.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Life Changing Application Solutions</h2>

              {/* <p className="mb-4">
                Flexible funds to help with things like school, health care, or situations that come up out of the blue.
              </p> */}

              <ul className="fw-light mx-5">
                <li>Personal Applications:</li>
                <p >Flexible funds for emergencies, health care, education, or unexpected needs.</p>
                <li>Business Applications:</li>
                <p>Helping entrepreneurs launch or expand their businesses without the burden of interest.</p>
                <li>Student Applications:</li>
                <p>Low-cost support to help students focus on their studies and achieve their dreams.</p>
                <li>Instant Applications:</li>
                <p>Fast, reliable support when you need cash urgently.</p>
                <li>Shariah-Compliant Support:</li>
                <p>Interest-free solutions aimed at helping low-income families and individuals thrive.</p>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Our Promise: A Brighter Tomorrow for Pakistan</h2>

              <p className="mb-4">
              Travel Embassy Job Apply is proud to serve Pakistan with a mission to make support accessible, transparent, and fair. We are here to help you start a business, study, or overcome challenges.
              </p>

              {/* <p className="mb-4">
              We're here to help you whether you're starting a business, paying for school, or dealing with a cash emergency. We're building a better, more open Pakistan one application at a time.
              </p> */}
              <div className="my-5 text-center">
                <img 
                  src={getCdnUrl(asaanQarz17)}
                  alt="Travel Embassy Job Apply Values Diagram" 
                  className="img-fluid rounded shadow-sm card-img-top" 
                />
              </div>
              <h2 className="fw-bold mt-5 mb-4">Be a Valuable Part of Travel Embassy Job Apply</h2>

              <p className="mb-4">
              When you choose Travel Embassy Job Apply, you gain a trusted partner for your journey. We guide you every step with honesty, clarity, and care.
              </p>

              <p className="mb-4">
              Take the first step toward your goals today. With Travel Embassy Job Apply, achieving your dreams has never been easier.

              </p>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3 ">
            <div
              className="sticky-top pr-3"
              style={{ top: "0", paddingRight: "22px" }}
            >
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;

