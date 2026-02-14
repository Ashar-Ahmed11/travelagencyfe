import React, { useContext } from 'react';
import AppContext from '../context/appContext';
import img1 from '../../Images/guard.png'
import img2 from '../../Images/driver.png'
import img3 from '../../Images/chef.png'
import img4 from '../../Images/plumber.png'
import img5 from '../../Images/electrician.png'
import img6 from '../../Images/warehouse worker.png'
import img7 from '../../Images/carpenter.png'
import img8 from '../../Images/painter.png'
import img9 from '../../Images/mechanics.png'
import { getCdnUrl } from '../../utils/cdnImage'

const JobCategories = () => {
  const { setUserData, userData } = useContext(AppContext);

  const handleApply = (job) => {
    setUserData({ ...userData, job });
    const el = document.getElementById('loan-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const color = "#1175C1"
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Types of Jobs</h2>
        <p className="text-muted">8-hour shifts with the option of working extra hours; no age limit; no degree needed; no IELTS needed </p>
      </div>

      <div className="row g-4">
        {/* Security Guard */}
        <div  data-aos="fade-right"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img1)}
              className="card-img-top" 
              alt="Security Guard"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Security Guard</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3500</h3>
              <p className="text-muted small">Canadian Dollar-commission 330</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:color}} onClick={() => handleApply('Security Guard')}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Driver */}
        <div  data-aos="fade-left"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img2)}
              className="card-img-top" 
              alt="Driver"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Driver</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3500</h3>
              <p className="text-muted small">Canadian Dollar-commission 330</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:color}} onClick={() => handleApply('Driver')}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Cook/Chef */}
        <div  data-aos="fade-right"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img3)}
              className="card-img-top" 
              alt="Cook/Chef"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Cook/Chef</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3000</h3>
              <p className="text-muted small">Canadian Dollar-Commission 300</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:color}} onClick={() => handleApply('Cook/Chef')}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Plumber */}
        <div  data-aos="fade-left"
            data-aos-duration="500
            " className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img4)}
              className="card-img-top" 
              alt="Plumber"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Plumber</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3200</h3>
              <p className="text-muted small">Canadian Dollar-commission 320</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:color}} onClick={() => handleApply('Plumber')}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Electrician */}
        <div  data-aos="fade-right"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img5)}
              className="card-img-top" 
              alt="Electrician"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Electrician</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3400</h3>
              <p className="text-muted small">Canadian Dollar-commission 340</p>
              <button className="btn  px-4 mt-3" style={{backgroundColor:color}} onClick={() => handleApply('Electrician')}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Warehouse Worker */}
        <div  data-aos="fade-left"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img6)}
              className="card-img-top" 
              alt="Warehouse Worker"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Warehouse Worker</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3100</h3>
              <p className="text-muted small">Canadian Dollar-commission 310</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:color}} onClick={() => handleApply('Warehouse Worker')}>Apply Now</button>
            </div>
          </div>
        </div>


        <div  data-aos="fade-left"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
              <img 
              src={getCdnUrl(img7)}
              className="card-img-top" 
              alt="Carpenter"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3"> Carpenter</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3100</h3>
              <p className="text-muted small">Canadian Dollar-commission 310</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:color}} onClick={() => handleApply('Carpenter')}>Apply Now</button>
            </div>
          </div>
        </div>
        <div  data-aos="fade-left"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img8)}
              className="card-img-top" 
              alt="Painter"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Painter</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3300</h3>
              <p className="text-muted small">Canadian Dollar-commission 310</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:color}} onClick={() => handleApply('Painter')}>Apply Now</button>
            </div>
          </div>
        </div>
        <div  data-aos="fade-left"
            data-aos-duration="500" className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img9)}
              className="card-img-top" 
              alt="Mechanic"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Mechanic</h5>
              <p className="text-muted mb-1">Salary</p>
              <h3 className="fw-bold mb-1">3400</h3>
              <p className="text-muted small">Canadian Dollar-commission 310</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:color}} onClick={() => handleApply('Mechanic')}>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;