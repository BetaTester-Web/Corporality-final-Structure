import React from "react";
import "./BP-Comp-2.css";
import "aos/dist/aos.css";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
></link>;

function BPComponent2() {
  return (
    <div className="bp-cp2-main container  ">
      <div class="row">
        <div className="col-sm-5 col-12">
          <div data-aos="fade-right" data-aos-duration="1500">
            <img
              src="..\img\BrandPositioning\BP-Comp2.png"
              alt="BP-CP-2"
              className="bp-cp2-img1"
            />
          </div>
        </div>
        <div className="  col-sm-7 col-12 bp-cp2-img2-div">
          <div data-aos="fade-left" data-aos-duration="1500">
            <img
              src="..\img\BrandPositioning\Rectangle-261.png"
              alt="BP-CP-2"
              className="bp-cp2-img2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BPComponent2;
