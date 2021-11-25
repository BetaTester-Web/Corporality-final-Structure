import React from "react";
import "./banner.css";

export default function Philosophy() {
  return (
    <>
      <div className="container my-3 text-center px-0">
        <div className="py-2 my-2">
          <div className="align-items-center">
            <p
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-uppercase align-middle fs-4 fw-bold my-2 componentText"
            >
              Philosophy
            </p>
            <img src="./img/HomePage/media/Line 5.png" alt="" />
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-center fs-5 philText"
          >
            To use agility to its optimum to bring satisfaction, experience and
            brilliance in outcomes for our clients.
          </div>
        </div>
        <div className="container">
          <div className="d-sm-flex flex-wrap">
            <div data-aos="fade-right" data-aos-duration="3000" className="col">
              <img src="./img/HomePage/media/amico.png" alt="" width="100%" />
            </div>
            <div data-aos="fade-left" data-aos-duration="3000" className="col">
              <div className="p-4 m-4 philForm align-items-left">
                <p className="text-uppercase fw-bold my-4 fs-4">
                  Request for a callback
                </p>
                <div className="form-floating m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="First Name"
                  />
                  <label for="fname">First Name</label>
                </div>
                <div className="form-floating m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Last Name</label>
                </div>
                <div className="form-floating m-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Email"
                  />
                  <label for="floatingPassword">Email</label>
                </div>
                <div className="form-floating m-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Mobile</label>
                </div>
                <button type="button" class="btn formbtn btn-sm text-uppercase">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
