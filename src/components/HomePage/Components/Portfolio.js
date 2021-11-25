import React from "react";
import "./banner.css";

export default function Portfolio() {
  return (
    <>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <div className="container my-2 py-2">
          <div className="align-items-center position-relative">
            <p
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-uppercase text-center fs-4 fw-bold py-3 componentText"
            >
              Our Portfolio
            </p>
            <img
              src="./img/HomePage/media/Line 5.png"
              alt=""
              className="position-absolute start-50 bottom-0 translate-middle-x"
            />
          </div>
        </div>
        <div className="d-flex container py-2 px-1 justify-content-evenly flex-wrap">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="my-3"
          >
            <img src="./img/HomePage/media/Divine Intercess 1.png" alt="" width="100%" />
            <div>
              <p className="text-center pimgText">DIVINE INTERECESSION</p>
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="my-3"
          >
            <img src="./img/HomePage/media/Home Constructio 1.png" alt="" width="100%" />
            <div>
              <p className="text-center pimgText">BUILD Q</p>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="my-3"
          >
            <img src="./img/HomePage/media/LIQMET Liquid Me 1.png" alt="" width="100%" />
            <div>
              <p className="text-center pimgText">LIQMET</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
