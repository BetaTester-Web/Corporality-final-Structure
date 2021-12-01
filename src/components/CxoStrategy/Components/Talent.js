import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./CxoStrategy.css";

// document.addEventListener("DOMContentLoaded", () => {
//   const button1 = document.querySelector(".cxo-button-1");
//   const button2 = document.querySelector(".cxo-button-2");
//   const button3 = document.querySelector(".cxo-button-3");
//   const button4 = document.querySelector(".cxo-button-4");
//   const diamond1 = document.querySelector(".diamond-1");
//   const diamond2 = document.querySelector(".diamond-2");
//   const diamond3 = document.querySelector(".diamond-3");
//   const diamond4 = document.querySelector(".diamond-4");

//   button1.addEventListener("click", () => {
//     if (diamond1.classList.contains("diamond-1")) {
//       diamond1.classList.add("active");
//       diamond2.classList.remove("active");
//       diamond3.classList.remove("active");
//       diamond4.classList.remove("active");
//     }
//   });

//   button2.addEventListener("click", () => {
//     if (diamond2.classList.contains("diamond-2")) {
//       diamond2.classList.add("active");
//       diamond1.classList.remove("active");
//       diamond3.classList.remove("active");
//       diamond4.classList.remove("active");
//     }
//   });


//   button3.addEventListener("click", () => {
//     if (diamond3.classList.contains("diamond-3")) {
//       diamond3.classList.add("active");
//       diamond1.classList.remove("active");
//       diamond2.classList.remove("active");
//       diamond4.classList.remove("active");
//     }
//   });

//   button4.addEventListener("click", () => {
//     if (diamond4.classList.contains("diamond-4")) {
//       diamond4.classList.add("active");
//       diamond1.classList.remove("active");
//       diamond3.classList.remove("active");
//       diamond2.classList.remove("active");
//     }
//   });
// });

export default function Talent() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <div className="container talent">
        <h1
          className="Talent-heading"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Top Executive Talent that delivers
        </h1>


        <p
          className="Talent-paragraph-content"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="500"
        >

          Our leadership team comes with years of experience, expertise, and
          success in resolving customer issues. Our contributors define business
          goals, marketing strategies, and pre-plan outcomes to deliver
          measurable results.
        </p>

        {/* button */}

        <div
          className="container Talent-buttons-container"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <div className="row">
            {/* button 1 */}
            <div className="col text-center cxo-button-1">
              <button type="button" className="Talent-buttons">
                <div className="text-1">Planning</div>
              </button>
            </div>
            {/* button 2 */}
            <div className="col text-center ">
              <button type="button" className="Talent-buttons cxo-button-2">
                <div className="text-2">Strategy</div>
              </button>
            </div>
            {/* button 3 */}
            <div className="col text-center ">
              <button type="button" className="Talent-buttons cxo-button-3">
                <div className="text-3">Implementation</div>
              </button>
            </div>
            {/* button 4 */}
            <div className="col text-center ">
              <button type="button" className="Talent-buttons cxo-button-4">
                <div className="text-4">Outcomes</div>
              </button>
            </div>
          </div>
        </div>

        {/* boxes */}

        {/* container 1 */}
        <div className="container Talent-box-container my-3 diamond-1 active">
          <div className="row d-flex justify-content-evenly">

            <div data-aos="fade-right" className="col text-center">
              <div className="talent-1">
                <div className=" Talent-box-outer-2">
                  <div className="  text-center Talent-box-inner-1">
                    <p className="Talent-box-inner-text-1 inner-text-2">
                      {" "}
                      Defining the strategy{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="col text-center"
            >
              <div className="talent-2">
                <div className=" Talent-box-outer-1">
                  <div className=" text-center Talent-box-inner-1">
                    <p className="Talent-box-inner-text-1 inner-text-2">
                      {" "}
                      Resource Allocation{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="col text-center"
            >
              <div className="talent-3">
                <div className="Talent-box-outer-2">
                  <div className=" text-center Talent-box-inner-1">
                    <p className="Talent-box-inner-text-1">
                      {" "}
                      Extending Control Mechanisms{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="700"
              className="col text-center"
            >
              <div className="talent-4">
                <div className="Talent-box-outer-1">
                  <div className=" text-center Talent-box-inner-1">
                    <p className="Talent-box-inner-text-1">
                      {" "}
                      Identify Objectives and challenges{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="900"
              className="col text-center"
            >
              <div className="talent-5">
                <div className=" Talent-box-outer-2">
                  <div className="text-center Talent-box-inner-1">
                    <p className="Talent-box-inner-text-1 inner-text-2">
                      {" "}
                      Setting Final Goals{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* container 2 */}
        <div className="container Talent-box-container-2 my-3 diamond-2">
          <div className="row d-flex justify-content-evenly">
            <div data-aos="fade-right" className="col text-center">
              <div className="talent-1">
                <div className=" Talent-box-outer-2-2">
                  <div className="  text-center Talent-box-inner-1-2">
                    <p className="Talent-box-inner-text-1 inner-text-2">
                      {" "}
                      Identify the means{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="col text-center"
            >
              <div className="talent-2">
                <div className=" Talent-box-outer-1-2">
                  <div className=" text-center Talent-box-inner-1-2">
                    <p className="Talent-box-inner-text-1 inner-text-2">
                      {" "}
                      Strategic Planning{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="col text-center"
            >
              <div className="talent-3">
                <div className="Talent-box-outer-2-2">
                  <div className=" text-center Talent-box-inner-1-2">
                    <p className="Talent-box-inner-text-1">
                      {" "}
                      Synthesise Information{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="700"
              className="col text-center"
            >
              <div className="talent-4">
                <div className="Talent-box-outer-1-2">
                  <div className=" text-center Talent-box-inner-1-2">
                    <p className="Talent-box-inner-text-1">
                      {" "}
                      Refine Company vision and mission{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="900"
              className="col text-center"
            >
              <div className="talent-5">
                <div className=" Talent-box-outer-2-2">
                  <div className="text-center Talent-box-inner-1-2">
                    <p className="Talent-box-inner-text-1">
                      {" "}
                      Execute strategies and Follow-up{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* container 3 */}
        <div className="container Talent-box-container-3 my-3 diamond-3">
          <div className="row d-flex justify-content-evenly">
            <div className="col text-center">
              <div className="talent-1">
                <div className=" Talent-box-outer-2-3">
                  <div className="  text-center Talent-box-inner-1-3">
                    <p className="Talent-box-inner-text-1">
                      {" "}
                      Integrating functional areas{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col text-center">
              <div className="talent-2">
                <div className=" Talent-box-outer-1-3">
                  <div className=" text-center Talent-box-inner-1-3">
                    <p className="Talent-box-inner-text-1">
                      {" "}
                      Designing offers according to customer funnels{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col text-center">
              <div className="talent-3">
                <div className="Talent-box-outer-2-3">
                  <div className=" text-center Talent-box-inner-1-3">
                    <p className="Talent-box-inner-text-1 inner-text-2">
                      {" "}
                      Facilitate focus{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col text-center">
              <div className="talent-4">
                <div className="Talent-box-outer-1-3">
                  <div className=" text-center Talent-box-inner-1-3">
                    <p className="Talent-box-inner-text-1 inner-text-2">
                      {" "}
                      Rising above the noise{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col text-center">
      <div className="talent-5">
        <div className=" Talent-box-outer-2-3">
          <div className="text-center Talent-box-inner-1-3">
            <p className="Talent-box-inner-text-1 inner-text-2"> Setting Final Goals </p>
          </div>
        </div>
      </div>
    </div> */}
          </div>
        </div>
        {/* container 4 */}
        <div className="container Talent-box-container-4 my-3 diamond-4">
          <div className="row d-flex justify-content-evenly">
            <div className="col text-center">
              <div className="talent-1">
                <div className=" Talent-box-outer-2-4">
                  <div className="  text-center Talent-box-inner-1-4">
                    <p className="Talent-box-inner-text-1 inner-text-2">
                      {" "}
                      Resolving pain points{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col text-center">
              <div className="talent-2">
                <div className=" Talent-box-outer-1-4">
                  <div className=" text-center Talent-box-inner-1-4">
                    <p className="Talent-box-inner-text-1 ">
                      {" "}
                      Establishing a feedback loop{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col text-center">
              <div className="talent-3">
                <div className="Talent-box-outer-2-4">
                  <div className=" text-center Talent-box-inner-1-4">
                    <p className="Talent-box-inner-text-1 inner-text-2">
                      {" "}
                      Assessing the experience{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
