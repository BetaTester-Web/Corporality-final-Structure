import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import localclass from "./ClentApproach.module.css";
import gear1 from "./img/gear1.png";
import gear2 from "./img/gear2.png";
import Ellipse79 from "./img/Ellipse 79.png";

export default function ClientApproach() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div>
      <div className={localclass.main_container}>
        <div className={localclass.clientApproach}>
          <div className={localclass.clientApproach_left}>
            <h1
              className="aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              Client-First Approach
            </h1>
            <p
              className="aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              There is never any one-size-fits-all proposition. Every customer
              is unique as is every entity. The beauty lies in balancing sales
              with the demand for the product or service, which takes into
              account finance, capacity and market trends. Companies are often
              trapped in selling excessively and experience a slump when it
              comes to deliveries. The best way to achieve a balance is to mesh
              sales and delivery together on a flexible interactive platform
              that can adapt to clients’ requirements. Being an expert in
              corporate level strategies, Corporality Global creates a
              predicated and symbiotic internal relationship that reflects
              externally to create brilliant customer experiences.
            </p>
          </div>
          <div className={localclass.clientApproach_right}>
            <div style={{ display: "flex" }}>
              <div className={localclass.gear1}>
                <img src={gear1} className={localclass.gear1_img1} />
                <h4>Product and sales Equilibrium</h4>
              </div>
              <div className={localclass.gear2}>
                <img src={gear1} className={localclass.gear2_img1} />
                <h4>Lead Genration and trading</h4>
              </div>
            </div>
            <div className={localclass.gear3}>
              <img src={gear2} className={localclass.gear3_img1} />
              <div className={localclass.gear3_inner}>
                <div className={localclass.gear3_inner1}>
                  <h2>Corporality strategy solutions</h2>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className={localclass.gear4}>
                <img src={gear1} className={localclass.gear4_img1} />
                <h4>Talent Ecquisition</h4>
              </div>
              <div className={localclass.gear5}>
                <img src={gear1} className={localclass.gear5_img1} />
                <h4>Budgeting</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
