import React, { useContext } from 'react';
import AppContext from '../context/appContext';

const TopCountries = () => {
  const { userData, setUserData } = useContext(AppContext);
  const color = '#1175C1';

  const countries = [
    { name: 'Saudi Arabia', iso: 'sa', img: 'https://2021-2025.state.gov/wp-content/uploads/2023/07/shutterstock_1938189982v2.jpg' },
    { name: 'United Arab Emirates', iso: 'ae', img: 'https://trip-00.web.app/static/media/dubai.6893f77e.jpg' },
    { name: 'Indonesia', iso: 'id', img: 'https://media.istockphoto.com/id/518355150/photo/ulun-danu-bratan-temple-at-sunrise-bali-indonesia.jpg?s=612x612&w=0&k=20&c=vvrxgefhH-0ePmAzIAfRFDfM3xjbGGKJdKy9BXgGuAY=' },
    { name: 'Turkey', iso: 'tr', img: 'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Malaysia', iso: 'my', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop' },
    { name: 'United States', iso: 'us', img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop' },
    { name: 'United Kingdom', iso: 'gb', img: 'https://images.unsplash.com/photo-1462206092226-f46025ffe607?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Canada', iso: 'ca', img: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/8B08/production/_127029553_gettyimages-499971920.jpg' },
    { name: 'Germany', iso: 'de', img: 'https://cdn.prod.website-files.com/62fc39d4a8950f2d6f3b35f6/631dac59728e649ca75ec6c3_German-Cities-1068x687.webp' },
    { name: 'Australia', iso: 'au', img: 'https://img.freepik.com/premium-photo/melbourne-city-skyline-twilight-australia_255553-2294.jpg?semt=ais_hybrid&w=740&q=80' },
  ];

  const handleApply = (countryName) => {
    setUserData({ ...userData, country: countryName });
    const target = document.getElementById('loan-form');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container py-4">
      <h3 className="fw-bold mb-3">Top Eligible Countries</h3>
      <div className="row g-3">
        {countries.map((c,i) => (
          <div className="col-12 col-sm-6 col-lg-4" key={c.name}>
            <div   data-aos={i%2===0 ? "fade-right" : "fade-left"}
            data-aos-duration="500"  className="card h-100 shadow-sm">
              <div className="position-relative">
                <img src={c.img} alt={c.name} className="card-img-top" style={{ height: 170, objectFit: 'cover' }} />
                <img
                  src={`https://flagcdn.com/w40/${c.iso}.png`}
                  alt={`${c.name} flag`}
                  style={{ position: 'absolute', top: 8, right: 8, borderRadius: 4, boxShadow: '0 0 6px rgba(0,0,0,0.3)' }}
                />
              </div>
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="fw-semibold">{c.name}</span>
                <button
                  onClick={() => handleApply(c.name)}
                  className="btn btn-sm"
                  style={{ backgroundColor: color, color: 'white' }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCountries;

