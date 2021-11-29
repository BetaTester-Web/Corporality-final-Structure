/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import "./BP-Comp-5.css";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
></link>;

function BPComponent5() {
  return (
    <div>
      <div className="BP-CP5-heading">
        <h1 className="BP-CP5-h1">Indomitable brand positioning strategies</h1>
      </div>

      <div>
        <img
          src="..\img\BrandPositioning\cp-5-1.png"
          alt=""
          className="bp-cp-5-img-1"
        />
        <img
          src="..\img\BrandPositioning\cp-5-2.png"
          alt=""
          className="bp-cp-5-img-2"
        />
      </div>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item bp-cp5-dd-head">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Defining the true differentiators
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              Marketing and communication must be disposed of in a way that will
              stir consumer interest so that you get noticed by all. Therefore,
              we create a preference that will differentiate you completely from
              other market players that essentially transports the customer to a
              premium experience.
            </div>
          </div>
        </div>
        <div class="accordion-item bp-cp5-dd-head">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Maintaining relevance
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              While true differentiators are important, compelling the target
              audience is vital to the success of a brand. At Corporality Global
              - the top digital marketing management firm in Sydney, we locate
              all pain points, including unfulfilled desires and focus on
              placing your brand where the audience needs it the most. You will
              be up for grabs in no time.
            </div>
          </div>
        </div>
        <div class="accordion-item bp-cp5-dd-head">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Address and engage
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse "
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              Coherence is essential to engage with your audiences and connect
              with them in meaningful ways. Our Sydney based professional
              digital marketing create a unique value that appeals to the
              people, and in the end, you are celebrated by them.
            </div>
          </div>
        </div>
        <div class="accordion-item bp-cp5-dd-head">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              Earn a reputation
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            class="accordion-collapse collapse "
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div class="accordion-body">
              Fulfilling expectations over and over again gives you a reputation
              of being a committed performer. We add intricate innovations to
              your brand positioning strategy that will create a winner’s
              attitude among users.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BPComponent5;
