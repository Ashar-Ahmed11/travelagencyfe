import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context/appContext";
import Akhuwat13 from '../../Images/newAkhuwat13.jpg'
import { Link } from "react-scroll";
const ApplyLoanForm = () => {
  const { fetchUserByCnic } = useContext(AppContext);
  const [cnicNumber, setCnicNumber] = useState("");
  const [user, setUser] = useState(null);
  const [modalInstance, setModalInstance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [uploading, setUploading] = useState(false); // New loading state

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { handleFileUpdate, userData, setUserData, createUser, inputRef, createUserLoader, siteData } = useContext(AppContext);

  // Wrapper for file change to handle loading
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

  // const color = "#108515"


  const color = "#1175C1"

  return (
    <div className="container py-5" id='loan-form'>
      <div className="row  justify-content-center">
        <div className="col-md-6 d-flex justify-content-center order-2 order-md-1">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: '30px',
              borderRadius: '10px',
              border: '3px dotted #666',
              width: '100%',
              maxWidth: '400px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
          >
            <h4
              style={{
                color: '#666',
                textAlign: 'center',
                marginBottom: '25px',
                fontWeight: 'bold',
              }}
            >
              Quick Job Apply
            </h4>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                createUser();
              }}
            >
              <div className="mb-3">
                <input
                  value={userData.firstName}
                  onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                  disabled={createUserLoader}
                  type="text"
                  className="form-control"
                  placeholder="Enter Your First Name"
                />
              </div>

              <div className="mb-3">
                <div className="position-relative">
                  <select
                    value={userData.country}
                    onChange={(e) => setUserData({ ...userData, country: e.target.value })}
                    disabled={createUserLoader}
                    className="form-control"
                    style={{ appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none', paddingRight: '2.5rem' }}
                  >
                    <option value="" disabled hidden>Select Country</option>
                    {/* Top Islamic countries (excluding Pakistan) */}
                    <option>Saudi Arabia</option>
                    <option>United Arab Emirates</option>
                    <option>Indonesia</option>
                    <option>Turkey</option>
                    <option>Malaysia</option>
                    {/* Top Western countries */}
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Germany</option>
                    <option>Australia</option>
                  </select>
                  <span className="fa fa-chevron-down" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#666' }}></span>
                </div>
              </div>
              <div className="mb-3">
                <input
                  value={userData.lastName}
                  onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                  disabled={createUserLoader}
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Last Name"
                />
              </div>
              <div className="mb-3">
                <div className="position-relative">
                  <select
                    value={userData.job}
                    onChange={(e) => setUserData({ ...userData, job: e.target.value })}
                    disabled={createUserLoader}
                    className="form-control"
                    style={{ appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none', paddingRight: '2.5rem' }}
                  >
                    <option value="" disabled hidden>Select Job</option>
                    <option>Security Guard</option>
                    <option>Driver</option>
                    <option>Cook/Chef</option>
                    <option>Plumber</option>
                    <option>Electrician</option>
                    <option>Warehouse Worker</option>
                    <option>Carpenter</option>
                    <option>Painter</option>
                    <option>Mechanic</option>
                  </select>
                  <span className="fa fa-chevron-down" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#666' }}></span>
                </div>
              </div>

              <div className="mb-3">
                <input
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  disabled={createUserLoader}
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="mb-3">
                <input
                  value={userData.phoneNumber}
                  onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                  disabled={createUserLoader}
                  type="tel"
                  className="form-control"
                  placeholder="Whatsapp No"
                />
              </div>
              <div className="mb-3">
                <input
                  value={userData.cnicNumber}
                  onChange={(e) => setUserData({ ...userData, cnicNumber: e.target.value })}
                  disabled={createUserLoader}
                  type="text"
                  className="form-control"
                  placeholder="CNIC No"
                />
              </div>
              <div className="mb-3">
                <input
                  value={userData.address}
                  onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                  disabled={createUserLoader}
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
              {/* Removed amount and bank inputs for Job Apply */}
              {/* <div className="mb-3">
                <div className="select-wrapper">
                  <select
                    value={userData.bankName}
                    onChange={(e) => setUserData({ ...userData, bankName: e.target.value })}
                    disabled={createUserLoader}
                    className="form-control custom-select"
                  >
                    <option value="" disabled hidden>Select Your Bank</option>
                    <option value="Bank Al-Habib">Bank Al-Habib</option>
                    <option value="Askari Bank">Askari Bank</option>
                    <option value="Bank Alfalah">Bank Alfalah</option>
                    <option value="Allied Bank">Allied Bank</option>
                    <option value="Habib Metropolitan Bank">Habib Metropolitan Bank</option>
                    <option value="HBL">HBL</option>
                    <option value="Meezan Bank">Meezan Bank</option>
                    <option value="Standard Chartered Bank">Standard Chartered Bank</option>
                    <option value="JS Bank">JS Bank</option>
                    <option value="Soneri Bank">Soneri Bank</option>
                    <option value="Summit Bank">Summit Bank</option>
                    <option value="Sindh Bank">Sindh Bank</option>
                    <option value="National Bank">National Bank</option>
                    <option value="NayaPay">NayaPay</option>
                    <option value="SadaPay">SadaPay</option>
                    <option value="EasyPaisa">EasyPaisa</option>
                    <option value="JazzCash">JazzCash</option>
                    <option value="Barclays">Barclays</option>
                    <option value="Citi Bank">Citi Bank</option>
                    <option value="UBL">UBL</option>
                    <option value="SilkBank">SilkBank</option>
                    <option value="Bank Islami">Bank Islami</option>
                    <option value="Dubai Islamic Bank">Dubai Islamic Bank</option>
                    <option value="Bank of Khyber">Bank of Khyber</option>
                    <option value="Bank of Punjab">Bank of Punjab</option>
                    <option value="Faysal Bank">Faysal Bank</option>
                    <option value="Samba Bank">Samba Bank</option>
                  </select>
                </div>
              </div> */}
              {/* {siteData ? <p className="py-2 h5">Application Fee: <span style={{ fontWeight: "bold" }}>{siteData.loanfee} PKR</span></p> : <div className="d-flex justify-content-center align-items-center py-2">
                <span className="text-danger" style={{ fontWeight: "bold" }}>Loading Application Fee</span>
                <div style={{ width: "25px", height: "25px" }} class="spinner-border text-danger  mx-2" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>} */}

              <label for="basic-url" class="form-label">Front CNIC Image</label>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  onChange={uploadImage("frontCnic")}

                  ref={inputRef}
                  disabled={uploading || createUserLoader}
                />
              </div>
              <label for="basic-url" class="form-label">Back CNIC Image</label>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  onChange={uploadImage("backCnic")}

                  ref={inputRef}
                  disabled={uploading || createUserLoader}
                />

              </div>
              <label for="basic-url" class="form-label">Passport Size Photo</label>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  onChange={uploadImage("passportSizePhotoImage")}

                  ref={inputRef}
                  disabled={uploading || createUserLoader}
                />


              </div>
              <label for="basic-url" class="form-label">Passport Front Image</label>

              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  onChange={uploadImage("passportFrontImage")}
                  ref={inputRef}
                  disabled={uploading || createUserLoader}
                />

              </div>
              <label for="basic-url" class="form-label">Passport Back Image</label>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  onChange={uploadImage("passportBackImage")}
                  ref={inputRef}
                  disabled={uploading || createUserLoader}
                />
              </div>


              {uploading && (
                <div className="mb-3 text-center">
                  <div className="spinner-border text-primary" role="status" />
                  <span className="ms-2">Uploading image...</span>
                </div>
              )}

              {/* {siteData ? <div>
                <div className="d-flex justify-content-between p-2 border-success border border-2 rounded-3 align-items-center my-2">
                  <img src="https://crystalpng.com/wp-content/uploads/2024/10/Easypaisa-logo.png" style={{ width: '15%' }} alt="" />
                  <span style={{fontWeight:"bold",fontSize:'25px'}}>{siteData.easypaisa}</span>
                </div>
                <div className="d-flex justify-content-between p-2  border-danger border border-2 rounded-3 align-items-center my-2">
                  <img src="https://w7.pngwing.com/pngs/72/297/png-transparent-television-jazz-android-cash-text-logo-cash.png" style={{ width: '25%' }} alt="" />
                  <span style={{fontWeight:"bold",fontSize:'25px'}}>{siteData.jazzcash}</span>
                </div>
              </div> :
                <div className="d-flex justify-content-center align-items-center py-2">
                  <span className="text-danger" style={{fontWeight:"bold"}}>Loading Payment Details</span>
                  <div style={{ width: "25px", height: "25px" }} class="spinner-border text-danger  mx-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>} */}

              <button
                type="submit"
                className="btn w-100 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: color,
                  color: 'white',
                  border: 'none',
                  padding: '12px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  borderRadius: '5px',

                }}

                disabled={uploading || createUserLoader}
              >
                Send
                {createUserLoader && <div style={{ width: "25px", height: "25px" }} class="spinner-border text-light  mx-2" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>}
              </button>
              <p className='pt-3'>If you have submitted your application, then check your status by <Link style={{ textDecoration: "underline" }} to="loan-status">clicking here</Link></p>
            </form>
          </div>
        </div>

        {/* Right column: Info */}
        <div className="col-md-6 p-5 order-1 order-md-2">
          <h2 className="fw-bold mb-3">Application for a Travel Agency Job in 2025
</h2>
          {/* <p>
            Enter your CNIC to see where your Travel Embassy Job Apply stands right now. Use our WhatsApp helpline for help or questions.
          </p> */}
        </div>
      </div>



    </div>
  );
};

export default ApplyLoanForm;