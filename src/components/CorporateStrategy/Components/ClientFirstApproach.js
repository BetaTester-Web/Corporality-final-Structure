import React from "react";
import "./ClientFirstApproach.css";
import Background_ellipse from "./images/Background_ellipse.png";
import Background_gear from "./images/Background_gear.png";

function ClientFirstApproach() {
  return (
    <div className="clientfirst_main_container">
      <div className="clientfirstapproach_leftside">
        <div className="clientfirstapproach_leftside_heading">
          Client-First Approach
        </div>
        <div className="clientfirstapproach_leftside_description">
          There is never any one-size-fits-all proposition. Every customer is
          unique as is every entity. The beauty lies in balancing sales with the
          demand for the product or service, which takes into account finance,
          capacity and market trends. Companies are often trapped in selling
          excessively and experience a slump when it comes to deliveries. The
          best way to achieve a balance is to mesh sales and delivery together
          on a flexible interactive platform that can adapt to clients’
          requirements. Being an expert in corporate level strategies,
          Corporality Global creates a predicated and symbiotic internal
          relationship that reflects externally to create brilliant customer
          experiences.
        </div>
      </div>
      <div className="clientfirstapproach_rightside">
        <div className="clientfirst_gear1">
          <img src={Background_gear} alt="" />
          <div className="clientfirst_gear1_text">
            Product and sales Equilibrium
          </div>
        </div>
        <div className="clientfirst_gear2">
          <img src={Background_gear} alt="" />
          <div className="clientfirst_gear2_text">
            Lead Genration and trading
          </div>
        </div>
        <div className="clientfirst_gear3">
          <img src={Background_gear} alt="" />
          <div className="clientfirst_gear3_text">Talent Ecquisition</div>
        </div>
        <div className="clientfirst_gear4">
          <img src={Background_gear} alt="" />
          <div className="clientfirst_gear4_text">Talent Ecquisition</div>
        </div>
        <div className="clientfirst_gearcenter">
          <img src={Background_gear} alt="" />
          <div className="clientfirst_ellipsecenter">
            <img src={Background_ellipse} alt="" />
            <div className="clientfirst_ellipsecenter_text">
              Corporality strategy solutions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientFirstApproach;
