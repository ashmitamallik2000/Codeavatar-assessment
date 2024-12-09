import React from "react";
import "./Form.css";

export const Form = () => {
  return (
    <div className="container-fluid ">
      <div className="main">
        <div className="row">
          <div>
        <h2 className="fw-bold text-center fs-4">Multi-step Proccess Form Assignment</h2>
        </div>
       <ul class="progressbar justify-content-center align-item-center text-center ">
        <li class="active">Business Type</li>
        <li> Business detials</li>
        <li>Authorized Represent</li>
        <li>Business Owners</li>
        <li>Company Directors</li>
        <li>Support Information</li>
        <li>Add Detials</li>
        <li>Complete Registration</li>
      </ul>
      </div>
      </div>
      <div className="container my-5">
        <div className="row">
        <div className="content">
        <h3> Tell us more about your business</h3>
        <p className="mb-4">Your info is like the Wi-Fi password-totally crucial for keeping things running, impressing the money folks, and making sure you get top-notch service without any buffering</p>
        </div>
        <div>
        <form>
          <div className="row">
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Legal Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="Legal Name"
                className="form-control border border-2"
              />
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Doing Business As <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="Doing Business As"
                className="form-control border border-2"
              />
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Company Registration Number{" "}
                <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="Company Registration Number"
                className="form-control border border-2"
              />
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Random Registration Number{" "}
                <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="Random Registration Number"
                className="form-control border border-2"
              />
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Website URL <span className="text-danger">*</span>
              </label>
              <input
                type="url"
                placeholder="Website URL"
                className="form-control border border-2"
              />
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Industry Name <span className="text-danger">*</span>
              </label>
              <select
                className="form-control dropdown-arrow border border-2"
                required
              >
                <option value="" disabled selected>
                  Industry Name
                </option>
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="retail">Retail</option>
              </select>
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                One Random Dropdown? <span className="text-danger">*</span>
              </label>
              <select
                className="form-control dropdown-arrow border border-2"
                required
              >
                <option value="" disabled selected>
                  Options nai options
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Which Dropdown would you like to select{" "}
                <span className="text-danger">*</span>
              </label>
              <select
                className="form-control dropdown-arrow border border-2"
                required
              >
                <option value="" disabled selected>
                  More options
                </option>
                <option value="one">one</option>
                <option value="two">two</option>
                <option value="three">three</option>
              </select>
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Another Random Dropdown appears{" "}
                <span className="text-danger">*</span>
              </label>
              <select
                className="form-control dropdown-arrow border border-2"
                required
              >
                <option value="" disabled selected>
                  Return of the options
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Account Usage Intent <span className="text-danger">*</span>
              </label>
              <select
                className="form-control dropdown-arrow border border-2"
                required
              >
                <option value="" disabled selected>
                  Account usage intent
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3----</option>
              </select>
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Random count per Month <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="Put the value  get the answer "
                className="form-control border border-2"
              />
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Expected total visits in this page{" "}
                <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="In number"
                className="form-control border border-2"
              />
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Purpose of using fake form{" "}
                <span className="text-danger">*</span>
              </label>
              <textarea
                placeholder="Purpose of using fake form"
                className="form-control border border-2"
              />
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Ek description toh banta hai{" "}
                <span className="text-danger">*</span>
              </label>
              <textarea
                placeholder="Product description"
                className="form-control border border-2"
              />
            </div>
            <div className="col-md-6 my-3">
              <label className="mb-1">
                Contact email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                placeholder="contact email"
                className="form-control border border-2"
              />
            </div>
            <div className="col-md-12 mt-2">
              <label className="mb-1">
                <h2 className="fw-bold fs-5">
                  Certification of Incoparation{" "}
                  <span className="text-danger">*</span>
                </h2>
              </label>
              <p className="text-muted ">upload the incoparation certificate</p>
              <div className="drag-area">
                <div class="icon">
                  <span
                    className="mt-4 bd-highlight rounded-circle d-flex justify-content-center align-items-center bg-secondary-subtle ms-4"
                    style={{ height: "40px", width: "40px" }}
                  >
                    <i className="bi bi-card-text fs-4 text-white"></i>
                  </span>
                </div>
                <span className="header text-muted ">
                  <a href="#" className="text-dark ">
                    {" "}
                    click to upload
                  </a>{" "}
                  or drag and drop
                </span>
                <span className="header text-muted">
                  Maximum file size 50 MB
                </span>
              </div>
            </div>
            <div className="col-md-12 mt-2">
              <label>
                <h2 className="fw-bold fs-5">
                  Company Logo <span className="text-danger">*</span>
                </h2>
              </label>
              <p className="text-muted">upload the company logo</p>
              <div className="drag-area">
                <div class="icon">
                  <span
                    className="mt-4 bd-highlight rounded-circle d-flex justify-content-center align-items-center bg-secondary-subtle ms-4"
                    style={{ height: "40px", width: "40px" }}
                  >
                    <i className="bi bi-card-text fs-4 text-white"></i>
                  </span>
                </div>
                <span className="header text-muted ">
                  <a href="#" className="text-dark ">
                    
                    click to upload
                  </a>{" "}
                  or drag and drop
                </span>
                <span className="header text-muted">
                  Maximum file size 50 MB
                </span>
              </div>
            </div>
          </div>

          <div className="button-container-grid mb-3">
            <button className="btn border border-dark">Previous</button>
            <button className="btn btn-danger">Next</button>
          </div>
        </form>
        </div>
        </div>
      </div>
    </div>
  );
};
