import React from "react";
import { useNavigate, Link } from 'react-router-dom'; // Import 'Link' from react-router-dom
import "./Signup.css";

import logo_icon from "../Assets/logo.png";
import flag from "../Assets/singapore.png";
import flags from "../Assets/hong.png";
import flages from "../Assets/usa.png";

export const Signup = () => {
    const navigate = useNavigate();

    const handleVerifyClick = () => {
      navigate('/Form'); // Navigate to the Form page on button click
    };

  return (
    <div className="container my-3 mx-3">
      <div className="col-md-6 custom-paragraph">
        {/* Use Link for the back navigation */}
        <span className="mt-5 ms-5">
          <Link to="/" className="text-white">
            <i className="bi bi-arrow-left">Back</i>
          </Link>
        </span>
        <h5 className="text-white text-center fs-4 fw-bold my-5">
          Layouts Card
        </h5>
        <div className="card-1 mb-5 mx-5">
          <img src={flag} className="flag rounded mb-2" alt="Flag" />
          <div>
            <p className="text-white fw-bold m-0 ">Singapore</p>
            <p className="text-white">Head office</p>
            <p className="text-white m-0">XYZ Pvt. Ltd.</p>
            <p className="text-white m-0 mt-2">
              Road to nowhere, 06-404, 500 internal
            </p>
            <p className="text-white m-0">Error</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="card-1 ms-2 ">
            <img src={flags} className="flag rounded mb-2" alt="Flag" />
            <div>
              <p className="text-white m-0 fw-bold">Hong Kong</p>
              <p className="text-white">Branches</p>
              <p className="text-white m-0">XYZ Pte. Ltd.</p>
              <p className="text-white m-0 mt-2">
                The infinite loop office,404 Timeout
              </p>
              <p className="text-white m-0">Plaza</p>
            </div>
          </div>
          <div className="card-1 ms-2 me-2">
            <img src={flages} className="flag rounded mb-2" alt="Flag" />
            <div>
              <p className="text-white m-0 fw-bold">USA</p>
              <p className="text-white">Branches</p>
              <p className="text-white m-0">XYZ Inc.</p>
              <p className="text-white m-0 mt-2">
                Nulltown,Buglandia,500 0xDEADBEE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 custom-paragraph-1">
        <img src={logo_icon} alt="Logo" className="logo mx-5 mt-5" />
        <div className="card py-5 px-3 border-0 ms-5">
          <h2 className="mt-5 fs-3 fw-bold">Verify your Email</h2>
          <span className="text-muted">
            Please enter 6 digit code we just sent to s**********a@xyz.com
          </span>
          <div className="d-flex flex-row mt-4">
            <input type="text" className="form-control me-3" autoFocus />
            <input type="text" className="form-control me-3" />
            <input type="text" className="form-control me-3" />
            <span className="me-3" style={{ fontSize: "44px" }}>
              -
            </span>
            <input type="text" className="form-control me-3" />
            <input type="text" className="form-control me-3" />
            <input type="text" className="form-control me-3" />
          </div>
          
          {/* Fixed Verify button */}
          <button
            className="bg-danger rounded mt-4 text-white"
            style={{ height: "40px", width: "100%" }}
            onClick={handleVerifyClick} // Trigger navigation on click
          >
            Verify
          </button>

          <span className="text-muted mt-2">
            Don't receive code? <a href="#" className="text-decoration-none">Resend Code</a>
          </span>
        </div>
        <p className="m-0 para">
          By continuing, you're agreeing to Nobody's Terms of{" "}
          <a href="#" className="text-decoration-none">
            Service
          </a>
          ,{" "}
          <a href="#" className="text-decoration-none">
            Privacy Policy
          </a>
          , <br />
          and{" "}
          <a href="#" className="text-decoration-none">
            Cookie Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};
