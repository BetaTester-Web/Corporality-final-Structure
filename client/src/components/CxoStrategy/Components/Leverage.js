import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./CxoStrategy.css"

export default function leverage() {



  return (
    <>
      <div className="container">
        <div class=" leverage">
          <h1 class="cxo-leverage-heading" data-aos="fade-down" data-aos-duration="1000">Leverage the on-demand Model</h1>
          <p class="cxo-leverage-para" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
            Experience significant risk mitigation, organisational transformation
            and turnaround management with our executive CXO leadership that
            drives company growth through customer experience in a market that
            runs at warp-speed.
          </p>

          {/*top2 cards*/}
          <div class="">
            <div class="row">

              {/* card 1 */}
              <div class="col " data-aos="flip-right" data-aos-duration="1000" data-aos-delay="800">
                <div class=" cxo-card-1-col ">
                  <div class="row cxo-card-1-row">
                    <div class="col ">
                      <img class="cxo-card1-img" src="./img/CxoStrategy/img/leverage/lev1.png" />
                    </div>
                    <div class="col">
                      <p class="cxo-card1-para">Increased Agitity</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div class="col" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1100">
                <div class="cxo-card-2-col">
                  <div class="row cxo-card-2-row">
                    <div class="col">
                      <img class="cxo-card2-img" src="./img/CxoStrategy/img/leverage/lev2.png" />
                    </div>
                    <div class="col">
                      <p class="cxo-card2-para">Reduced Costs</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/*bottom2 cards*/}
          <div class="">
            <div class="row">
              {/* card 1 */}
              <div class="col " data-aos="flip-right" data-aos-duration="1000" data-aos-delay="1200">
                <div class=" cxo-card-1-col ">
                  <div class="row cxo-card-1-row">
                    <div class="col ">
                      <img class="cxo-card1-img" src="./img/CxoStrategy/img/leverage/lev3.png" />
                    </div>
                    <div class="col">
                      <p class="cxo-card1-para">Increased Agitity</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div class="col" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1500">
                <div class=" cxo-card-2-col">
                  <div class="row cxo-card-2-row">
                    <div class="col">
                      <img class="cxo-card2-img" src="./img/CxoStrategy/img/leverage/lev4.png" />
                    </div>
                    <div class="col">
                      <p class="cxo-card2-para">Reduced Costs</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </>
  );
}
