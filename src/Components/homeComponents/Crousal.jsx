import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../context/appContext';
import coverImage from '../../Images/carousalimg.png'
import { getCdnUrl } from '../../utils/cdnImage'
import { Link } from 'react-scroll';
import { TypeAnimation } from "react-type-animation";

const Crousal = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { handleFileUpdate, userData, setUserData, createUser, inputRef, createUserLoader, siteData } = useContext(AppContext);

  const uploadImage = (fieldName) => async (e) => {
    setUploading(true);
    try {
      await handleFileUpdate(e, fieldName);
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  const color = "#1175c1"

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center mainCarousal"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${getCdnUrl(coverImage)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(63, 142, 203, 0.6)',
          zIndex: 1,
        }}
      />

      {/* Content row */}
      <div className="row w-100 position-relative px-4 px-md-5 py-5 align-items-center" style={{ zIndex: 2 }}>

        {/* Left Column */}
        <div className={`col-md-6 ${isMobile ? 'col-12 mb-5' : ''}`}>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-white text-uppercase fw-semibold mb-3 small"
            style={{ letterSpacing: '3px' }}
          >
            Worldwide Opportunities
          </p>

     <h1
      data-aos="fade-right"
      data-aos-duration="1500"
      className={`${isMobile ? "display-5" : "display-4"} fw-bold text-white lh-sm mb-4`}
    >
      <TypeAnimation
        sequence={[
          "Travel Agency Jobs Around the World", // typed text
          2000, // pause on finished text
          "", // clear (optional)
          500, // small delay
          "Explore Opportunities Globally", // second text (optional)
          2000,
        ]}
        speed={50}
        style={{ display: "inline-block" }}
        wrapper="span"
        repeat={Infinity}
      />
    </h1>

          <p
            data-aos="fade-right"
            data-aos-duration="1800"
            className="text-white-50 fs-5 mb-0"
            style={{ maxWidth: '460px', lineHeight: '1.8' }}
          >
            Find diplomatic and foreign travel jobs with ease. Real listings, professional guidance, and a simpler path to your global career.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center mt-5 mt-md-0">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="p-4 p-md-5 rounded-3 text-center"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              maxWidth: '360px',
              width: '100%',
            }}
          >
            <h5 className="text-white fw-semibold mb-2">Begin Your Journey</h5>
            <p className="text-white-50 small mb-4">
              Thousands of embassy roles are waiting. Take the first step today.
            </p>
            <Link
              className="btn btn-lg w-100 fw-semibold border-white border-2 car-btn"
              to="loan-form"
              role="button"
              style={{ backgroundColor: '#1175C1', color: 'white' , borderRadius:'16px'}}
              type="button"
            >
              Start Your Application
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Crousal;