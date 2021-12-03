/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./BP-Comp-5.css";
import { Accordion } from "react-bootstrap";

function BPComponent5() {
  return (
    <div>
      <div className="BP-CP5-heading">
        <h1 className="BP-CP5-h1">Indomitable brand positioning strategies</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-1 ">
            <img
              src="..\img\BrandPositioning\cp-5-2.png"
              alt=""
              className="bp-cp-5-img-2 img-fluid"
            />
            <img
              src="..\img\BrandPositioning\cp-5-1.png"
              alt=""
              className="bp-cp-5-img-1 img-fluid "
            />
          </div>
          <div className="col-11">
            <Accordion>
              {" "}
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div class="container">
                    <div class="row">
                      <div class="col-3">
                        <img src="../img/BrandPositioning/faviconTM1.png" />
                      </div>
                      <div class="col-9">Defining the true differentiators</div>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div class="container">
                    <div class="row">
                      <div class="col-2">
                        <img src="../img/BrandPositioning/Rectangle-1.png" />
                      </div>
                      <div class="col-10">
                        Marketing and communication must be disposed of in a way
                        that will stir consumer interest so that you get noticed
                        by all. Therefore, we create a preference that will
                        differentiate you completely from other market players
                        that essentially transports the customer to a premium
                        experience.
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div class="container">
                    <div class="row">
                      <div class="row">
                        <div class="col-3">
                          <img src="../img/BrandPositioning/faviconTM2.png" />
                        </div>
                        <div class="col-9">Maintaining relevance</div>
                      </div>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div class="container">
                    <div class="row">
                      <div class="col-2">
                        <img src="../img/BrandPositioning/Rectangle-2.png" />
                      </div>
                      <div class="col-10">
                        While true differentiators are important, compelling the
                        target audience is vital to the success of a brand. At
                        Corporality Global - the top digital marketing
                        management firm in Sydney, we locate all pain points,
                        including unfulfilled desires and focus on placing your
                        brand where the audience needs it the most. You will be
                        up for grabs in no time.
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div class="container">
                    <div class="row">
                      <div class="row">
                        <div class="col-3">
                          <img src="../img/BrandPositioning/faviconTM3.png" />
                        </div>
                        <div class="col-9">Address and engage</div>
                      </div>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div class="container">
                    <div class="row">
                      <div class="col-2">
                        <img src="../img/BrandPositioning/Rectangle-3.png" />
                      </div>
                      <div class="col-10">
                        Coherence is essential to engage with your audiences and
                        connect with them in meaningful ways. Our Sydney based
                        professional digital marketing create a unique value
                        that appeals to the people, and in the end, you are
                        celebrated by them.
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div class="container">
                    <div class="row">
                      <div class="row">
                        <div class="col-3">
                          <img src="../img/BrandPositioning/faviconTM4.png" />
                        </div>
                        <div class="col-9"> Earn a reputation</div>
                      </div>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div class="container">
                    <div class="row">
                      <div class="col-2">
                        <img src="../img/BrandPositioning/Rectangle-4.png" />
                      </div>
                      <div class="col-10">
                        Fulfilling expectations over and over again gives you a
                        reputation of being a committed performer. We add
                        intricate innovations to your brand positioning strategy
                        that will create a winner’s attitude among users.
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BPComponent5;
