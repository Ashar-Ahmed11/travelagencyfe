import React from 'react';
import Akhuwat10 from '../../Images/z6.png'
import Akhuwat11 from '../../Images/z5.png'
import { getCdnUrl } from '../../utils/cdnImage'
// import asaanQarz22 from '../../Images/asan qarz22.jpg'

const AkhuwatImages3 = () => {
  return (
    <div className="container-fluid bg-light py-5">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-6 py-3 mb-4 mb-md-0 d-flex justify-content-center">
          <img 
            src={getCdnUrl(Akhuwat10)}
            alt="Hasina Bibi - Stitching Business" 
            className="card-img-top rounded "
          
          />
        </div>
  
        <div className="col-md-6 py-3 d-flex justify-content-center">
          <img 
            src={getCdnUrl(Akhuwat11)}
            alt="Farzana Bibi - Beauty Parlour" 
            className="card-img-top rounded "
          
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default AkhuwatImages3;