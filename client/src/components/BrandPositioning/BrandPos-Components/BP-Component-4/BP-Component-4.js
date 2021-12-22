import React from "react";
import "./BP-Component4.css";
import "aos/dist/aos.css";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
></link>;

function BPComponent4() {
  return (
    <div className="bp-cp-4-main  ">
      <div className="BP-CP-4-img-d position-relative">
        <div className="BP-c4-d position-absolute end-0 top-0 translate-middle-y">
          <div data-aos="fade-left" data-aos-duration="1500">
            <img
              src="..\img\BrandPositioning\Group-1053srt.png"
              alt="BP-CP-4"
              className="BP-CP-4-img2 img-fluid"
            />
            <h1 className="BP-c4-h">
              Articulating yourself - Creating magic from the basics{" "}
            </h1>

            <p className="BP-c4-p">
              An effective brand positioning and marketing strategy is all about
              taking the most effective steps towards becoming clear,
              differentiated and meaningful. Corporality Global evaluates your
              current branding orientation in combination with market analytics
              to help you articulate yourself. You need a roadmap that clearly
              presents who you are - what you do - why you matter, making
              positioning, not just beneficial but sustainable as well. We then
              tie the positioning to an already existing idea of your company
              with the target audience and shift that truth to your audience’s
              advantage.
            </p>
          </div>
        </div>
        <img
          src="..\img\BrandPositioning\BP-Comp3.png"
          alt="BP-CP-4"
          className="BP-CP-4-img img-fluid"
        />
      </div>
    </div>
  );
}
export default BPComponent4;
