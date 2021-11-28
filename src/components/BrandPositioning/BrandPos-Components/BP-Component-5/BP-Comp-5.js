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

      <div>
        <div>
          <button
            class=" dropdown-toggle dropdown bp-cp-5-dd"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="bp-cp-5-dd-span ">
              <img
                src="..\img\BrandPositioning\faviconTM1.png"
                alt=""
                className="bp-cp-5-dd-img"
              />
              Defining the true differentiators
            </span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <p class="dropdown-item bp-cp-5-dl">
                <span className="bp-cp-5-dl-span">
                  Marketing and communication must be disposed of in a way that
                  will stir consumer
                  <br /> interest so that you get noticed by all. Therefore, we
                  create a preference that will
                  <br /> differentiate you completely from other market players
                  that essentially transports
                  <br /> the customer to a premium experience.
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div>
          <button
            class=" dropdown-toggle dropdown bp-cp-5-dd"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="bp-cp-5-dd-span">
              <img
                src="..\img\BrandPositioning\faviconTM1.png"
                alt=""
                className="bp-cp-5-dd-img"
              />
              Maintaining relevance
            </span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <p class="dropdown-item">Something else here</p>
            </li>
          </ul>
        </div>
        <div>
          <button
            class=" dropdown-toggle dropdown bp-cp-5-dd"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="bp-cp-5-dd-span">
              <img
                src="..\img\BrandPositioning\faviconTM1.png"
                alt=""
                className="bp-cp-5-dd-img"
              />
              Address and engage
            </span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <p class="dropdown-item">Something else here</p>
            </li>
          </ul>
        </div>
        <div>
          <button
            class=" dropdown-toggle dropdown bp-cp-5-dd"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="bp-cp-5-dd-span">
              <img
                src="..\img\BrandPositioning\faviconTM1.png"
                alt=""
                className="bp-cp-5-dd-img"
              />
              Earn a reputation
            </span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <p class="dropdown-item">Something else here</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default BPComponent5;
