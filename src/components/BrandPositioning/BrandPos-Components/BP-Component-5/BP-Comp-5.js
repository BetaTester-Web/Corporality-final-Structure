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
      <div className="bp-cp5-dropdown">
        <div class="dropdown">
          <button
            class="dropdown-toggle cp5-dd-menu"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="cp5-span1">Defining the true differentiators</span>
          </button>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <p class="dropdown-item cd5-dd-list">Action</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default BPComponent5;
