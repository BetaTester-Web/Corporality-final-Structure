import React from "react";
import "./ThreeBoxes.css";
import chart from "./images/chart.png";
import client from "./images/client.png";
import projects from "./images/projects.png";

function ThreeBoxes() {
  return (
    <div className="threeboxes_main">
      <div className="threeboxes_first">
        <div className="first_box_image">
          <img src={projects} alt="" />
        </div>
        <div className="first_box_text">
          <div className="first_heading">590+</div>
          <div className="first_description">Projects</div>
        </div>
      </div>
      <div className="threeboxes_second">
        <div className="second_box_image">
          <img src={client} alt="" />
        </div>
        <div className="second_box_text">
          <div className="second_heading">100</div>
          <div className="second_description">
            Clients served across Australia and the world
          </div>
        </div>
      </div>
      <div className="threeboxes_third">
        <div className="third_box_image">
          <img src={chart} alt="" />
        </div>
        <div className="third_box_text">Geospatial and CSR initiatives</div>
      </div>
    </div>
  );
}

export default ThreeBoxes;
