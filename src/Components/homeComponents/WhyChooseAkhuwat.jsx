import React from "react";
import CountUp from 'react-countup';
import Akhuwat4 from '../../Images/i14.jpg'
import Akhuwat5 from '../../Images/i15.jpg'
import { getCdnUrl } from '../../utils/cdnImage'

const WhyChooseAkhuwat = () => {

  let color = "#1175C1" 

  return (
    <section
      className="container-fluid p-0"
      style={{ backgroundColor: "#f7f8f9" }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-12 mb-3">
            <p className="text-uppercase fw-bold">SERVICES</p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="fw-bold mb-4 display-5">
            Why It's a Good Idea to Apply for Travel Agency Jobs
            </h2>
            <p>
           We make assistance easier for you here at Travel Agency. Our procedure is open, transparent, and speedy. We can help with anything from healthcare and education to finding a new home or growing your business. You can visit the closest center for assistance or apply online in a matter of minutes. No misunderstandings, no unstated fees—just precise conditions and a dependable path to your next chance. 

            </p>
          </div>

          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src={getCdnUrl(Akhuwat4)}
                    alt="Money Received"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 text-white p-4 rounded-bottom"
                    style={{ width: "100%", backgroundColor: color }}
                  >
                    <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                    <h2 className="display-4 text-center fw-bold"><CountUp end={14} duration={3} suffix="K+" />
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src={getCdnUrl(Akhuwat5)}
                    alt="Founder"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 bg-dark text-white p-4 rounded-bottom"
                    style={{ width: "100%" }}
                  >
                    <p className="mb-0 text-center">ESTABLISHED SINCE</p>
                    <h2 className="display-4 text-center fw-bold">2003</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAkhuwat;
