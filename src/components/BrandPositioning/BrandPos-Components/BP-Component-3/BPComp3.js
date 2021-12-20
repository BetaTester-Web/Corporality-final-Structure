import React, { useEffect } from "react";
import "./BPComp3.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function BPComp3() {
  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  });
  return (
    <>
      <div className="bpcp3FullSection py-4 position-relative vw-100">
        <div className="mx-auto my-2">
          <p
            className="fw-bold fs-3 py-3 text-center bpcp3Heading"
            style={{ color: "#33657E" }}
          >
            THE PROCESS
          </p>
        </div>
        <div className="position-absolute top-50 start-50 translate-middle bpcp3BackLogo">
          <img
            src="/img/BrandPositioning/Mask-Group.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="">
          <img
            src="/img/BrandPositioning/path.png"
            alt=""
            className="img-fluid position-absolute top-50 start-50 translate-middle-x bpcp3Snake vw-100"
          />
        </div>
        <div className="vw-100 d-flex justify-content-evenly flex-wrap blocksContainer">
          <div className="bpcp3Block position-relative my-2">
            <div className="upArrow position-absolute bottom-50 start-50 translate-middle-x bpcp3xAllign">
              <img
                src="/img/BrandPositioning/Line-51.png"
                alt=""
                className="img-fluid bpcp3xAllign"
              />
            </div>
            <div className="position-absolute top-50 translate-middle-y bpcp3Ellipse1">
              <img
                src="/img/BrandPositioning/Ellipse-80.png"
                alt=""
                className="img-fluid"
              />
              <p className="text-wrap text-center position-absolute top-50 start-50 translate-middle bpcp3xAllign bpcp3CircleText">
                Scope the initiative
              </p>
            </div>

            <p className="position-absolute text-center top-0 start-50 translate-middle-x bpcp3xAllign bpcp3Description">
              Assess current brand portfolio of offerings
            </p>
          </div>
          <div className="bpcp3Block position-relative my-2">
            <div className="downArrow position-absolute top-50 start-50 translate-middle-x bpcp3xAllign">
              <img
                src="/img/BrandPositioning/Line-55.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="position-absolute top-50 translate-middle-y bpcp3Ellipse2">
              <img
                src="/img/BrandPositioning/Ellipse-80.png"
                alt=""
                className="img-fluid"
              />
              <p className="text-wrap text-center position-absolute top-50 start-50 translate-middle bpcp3xAllign bpcp3CircleText">
                Prepare a strategy canvas
              </p>
            </div>

            <p className="position-absolute text-center bottom-0 start-50 translate-middle-x bpcp3xAllign bpcp3Description">
              Where do you stand now against competition?
            </p>
          </div>
          <div className="bpcp3Block position-relative my-2">
            <div className="upArrow position-absolute bottom-50 start-50 translate-middle-x bpcp3xAllign">
              <img
                src="/img/BrandPositioning/Line-51.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="position-absolute top-50 translate-middle-y bpcp3Ellipse1">
              <img
                src="/img/BrandPositioning/Ellipse-80.png"
                alt=""
                className="img-fluid"
              />
              <p className="text-wrap text-center position-absolute top-50 start-50 translate-middle bpcp3xAllign bpcp3CircleText">
                Discover customer pain points
              </p>
            </div>

            <p className="position-absolute text-center top-0 start-50 translate-middle-x bpcp3xAllign bpcp3Description">
              Check for problems to be resolve and create new demand
            </p>
          </div>
          <div className="bpcp3Block position-relative my-2">
            <div className="downArrow position-absolute top-50 start-50 translate-middle-x bpcp3xAllign">
              <img
                src="/img/BrandPositioning/Line-55.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="position-absolute top-50 translate-middle-y bpcp3Ellipse2">
              <img
                src="/img/BrandPositioning/Ellipse-80.png"
                alt=""
                className="img-fluid"
              />
              <p className="text-wrap text-center position-absolute top-50 start-50 translate-middle bpcp3xAllign bpcp3CircleText">
                Identify new market space
              </p>
            </div>

            <p className="position-absolute text-center bottom-0 start-50 translate-middle-x bpcp3xAllign bpcp3Description">
              Unlock the demand to newer customers
            </p>
          </div>
          <div className="bpcp3Block position-relative my-2">
            <div className="upArrow position-absolute bottom-50 start-50 translate-middle-x bpcp3xAllign">
              <img
                src="/img/BrandPositioning/Line-51.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="position-absolute top-50 translate-middle-y bpcp3Ellipse1">
              <img
                src="/img/BrandPositioning/Ellipse-80.png"
                alt=""
                className="img-fluid"
              />
              <p className="text-wrap text-center position-absolute top-50 start-50 translate-middle bpcp3xAllign bpcp3CircleText">
                Develop strategic options
              </p>
            </div>

            <p className="position-absolute text-center top-0 start-50 translate-middle-x bpcp3xAllign bpcp3Description">
              Practical,realistic strategies with alternative plans
            </p>
          </div>
          <div className="bpcp3Block position-relative my-2">
            <div className="position-absolute top-50 translate-middle-y bpcp3Ellipse2">
              <img
                src="/img/BrandPositioning/Ellipse-80.png"
                alt=""
                className="img-fluid"
              />
              <p className="text-wrap text-center position-absolute top-50 start-50 translate-middle bpcp3xAllign bpcp3CircleText">
                Launch your brand
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
