import React from "react";
import "./ClientFirstApproach.css";
import Background_ellipse from "./images/Background_ellipse.png";
import Background_gear from "./images/Background_gear.png";

function ClientFirstApproach() {
  return (
    <div class="row clientfirstapprocah_main">
      <div class="col-lg-7 col-md-8 col-sm-12">
        <div className="clientfirstapproach_text">
          <div className="clientfirstapproach_heading">
            CLIENT FIRST APPROACH
          </div>
          <div className="clientfirstapproach_description">
            There is never any one-size-fits-all proposition. Every customer is
            unique as is every entity. The beauty lies in balancing sales with
            the demand for the product or service, which takes into account
            finance, capacity and market trends. Companies are often trapped in
            selling excessively and experience a slump when it comes to
            deliveries. The best way to achieve a balance is to mesh sales and
            delivery together on a flexible interactive platform that can adapt
            to clients’ requirements. Being an expert in corporate level
            strategies, Corporality Global creates a predicated and symbiotic
            internal relationship that reflects externally to create brilliant
            customer experiences.
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-4 col-sm-12 ">
        <div className="clientfirstapproach_image">
          <div className="geartop1">
            <img src={Background_gear} alt="Chart" />
            <p>
              Product and <br />
              sales
              <br /> Equilibrium{" "}
            </p>
          </div>
          <div className="geartop2">
            <img src={Background_gear} alt="Chart" />
            <p>
              Lead
              <br /> Genration
              <br /> and trading
            </p>
          </div>
          <div className="gear_center">
            <img src={Background_gear} alt="Chart" />
          </div>
          <div className="ellipse_center">
            <img src={Background_ellipse} alt="Chart" />
            <p>
              Corporality
              <br /> strategy
              <br /> solutions
            </p>
          </div>
          <div className="gearbottom1">
            <img src={Background_gear} alt="Chart" />
            <p>
              Talent
              <br /> Ecquisition
            </p>
          </div>
          <div className="gearbottom2">
            <img src={Background_gear} alt="Chart" />
            <p>Budgeting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientFirstApproach;
