import React from "react";
import "./Banner2.css";
import rightArrow from "../Components/images/vector_1.png"

export default function Banner2() {
  return (
    <>
      <div className="vw-100 d-flex justify-content-evenly align-items-center flex-wrap my-5 dbanner">
        <div className="sbox d-flex align-items-center my-3 mx-3 justify-content-evenly position-relative">
          <div className="boxContent p-3 align-items-center position-absolute">
            <p className="text-uppercase boxHead text-center mt-5">
              Industry Focus
            </p>
            <p className="text-wrap text-center mt-2">
              Creating high-quality solutions for large enterprises with complex
              workflows
            </p>
            <div className="learn-more">
              Learn More
              <img src={rightArrow} alt="" />
            </div>
          </div>
          <div className="littleD align-items-center position-absolute top-0 start-50 translate-middle-x">
            <div className="purpleD align-items-center"></div>
            <div className="position-absolute top-50 start-50 translate-middle align-items-centerdImg">
              <img src="/img/HomePage/media/Vector.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="box shadow-lg border position-relative">
            <div className="position-absolute start-50 top-0 translate-middle-x my-4">
              <img
                src="/img/HomePage/media/Polygon 23.png"
                alt=""
                className="img-fluid dd1"
              />
            </div>
            <div className="position-absolute start-0 bottom-0 translate-middle-x mx-4 my-5">
              <img
                src="/img/HomePage/media/Polygon 24.png"
                alt=""
                className="img-fluid dd1"
              />
            </div>
          </div>
        </div>
        <div className="sbox d-flex align-items-center my-3 mx-3 justify-content-evenly position-relative">
          <div className="boxContent p-3 align-items-center position-absolute">
            <p className="text-uppercase boxHead text-center mt-5">
              Social Impact
            </p>
            <p className="text-wrap text-center mt-2">
              Prospective plans to give back to society making a green
              environment a reality
            </p>
            <div className="learn-more">
              Learn More
              <img src={rightArrow} alt="" />
            </div>
          </div>
          <div className="littleD align-items-center position-absolute top-0 start-50 translate-middle-x">
            <div className="purpleD align-items-center"></div>
            <div className="position-absolute top-50 start-50 translate-middle align-items-centerdImg">
              <img
                src="/img/HomePage/media/planet-earth 1.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="box shadow-lg border">
            <div className="position-absolute start-50 top-0 translate-middle-x my-4">
              <img
                src="/img/HomePage/media/Polygon 23.png"
                alt=""
                className="img-fluid dd1"
              />
            </div>
            <div className="position-absolute start-0 bottom-0 translate-middle-x mx-4 my-5">
              <img
                src="/img/HomePage/media/Polygon 24.png"
                alt=""
                className="img-fluid dd1"
              />
            </div>
          </div>
        </div>
        <div className="sbox d-flex align-items-center my-3 mx-3 justify-content-evenly position-relative">
          <div className="boxContent p-3 align-items-center position-absolute">
            <p className="text-uppercase boxHead text-center mt-5">Agility</p>
            <p className="text-wrap text-center mt-2">
              Utilising agile in it’s true form to provide timely, transparent
              and reliable outcomes
            </p>
            <div className="learn-more">
              Learn More
              <img src={rightArrow} alt="" />
            </div>
          </div>
          <div className="littleD align-items-center position-absolute top-0 start-50 translate-middle-x">
            <div className="purpleD align-items-center"></div>
            <div className="position-absolute top-50 start-50 translate-middle align-items-centerdImg">
              <img src="/img/HomePage/media/agile (1) 1.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="box shadow-lg border">
            <div className="position-absolute start-50 top-0 translate-middle-x my-4">
              <img
                src="/img/HomePage/media/Polygon 23.png"
                alt=""
                className="img-fluid dd1"
              />
            </div>
            <div className="position-absolute start-0 bottom-0 translate-middle-x mx-4 my-5">
              <img
                src="/img/HomePage/media/Polygon 24.png"
                alt=""
                className="img-fluid dd1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
