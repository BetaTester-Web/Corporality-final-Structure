import React from "react";
import "./Library.css";
import img1 from "./images/blog/img1.jpg";
import img2 from "./images/blog/img2.jpg";
import img3 from "./images/blog/img3.jpg";
import img4 from "./images/blog/img4.jpg";
import { right } from "@popperjs/core";
import { useNavigate } from "react-router-dom";

function Library() {
  const navigate = useNavigate()
  const showOneSection = (index) => {
    const classes = [
      "text_active_first",
      "text_active_second",
      "text_active_third",
      "text_active_forth",
    ];
    const buttons = document.querySelectorAll(".hm-library_left_btns");
    buttons[index].classList.add(classes[index]);
    for (let i = 0; i < buttons.length; i++) {
      if (i != index) {
        if (buttons[i].classList.contains(classes[i])) {
          buttons[i].classList.remove(classes[i]);
        }
      }
    }
    const rightDivs = document.querySelectorAll(".hm-right-side-div");
    rightDivs[index].style.display = "block";
    for (let i = 0; i < rightDivs.length; i++) {
      if (i != index) {
        rightDivs[i].style.display = "none";
      }
    }
  };

  return (
    <>
      <div className="library_parent">
        <div className="container">
          <div className="library_main_container">
            <div className="content_side">
              <div
                className="text1 aos-init hm-library_left_btns text_active_first"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-offset="0"
                onClick={() => showOneSection(0)}
              >
                Industry Research
              </div>
              <div
                className="text1 aos-init hm-library_left_btns"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-offset="0"
                onClick={() => showOneSection(1)}
              >
                Video Library
              </div>
              <div
                className="text1 aos-init hm-library_left_btns"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-offset="0"
                onClick={() => showOneSection(2)}
              >
                Blog
              </div>
              <div
                className="text1 aos-init hm-library_left_btns"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-offset="0"
                onClick={() => showOneSection(3)}
              >
                Download Resources
              </div>
            </div>

            <div
              className="image_side aos-init hm-right-side-div"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              id="image1"
            >
              <div className="upper_image">
                <img src={img1} alt="" />
              </div>
              <div className="lower_text">
                <div className="lower_text_heading">Industry Research</div>
                <div className="lower_text_date">July 20, 2021</div>
                <div className="lower_text_description">
                  The art of converting prospects to customers in the medtech
                  industry | Corporality Global
                </div>
              </div>
            </div>
            <div
              className="image_side image_side_2 aos-init hm-right-side-div"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              id="image2"
            >
              <div className="upper_image">
                <img src={img2} alt="" />
              </div>
              <div className="lower_text">
                <div className="lower_text_heading">Video Library</div>
                <div className="lower_text_date">July 15, 2021</div>
                <div className="lower_text_description">
                  Leaders in construction must revamp their websites fast! |
                  Corporality Global
                </div>
              </div>
            </div>

            <div
              className="image_side image_side_3 aos-init hm-right-side-div"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              id="image3"
            >
              <div className="upper_image" onClick={() => navigate("/blog")}>
                <img src={img3} alt="" />
              </div>
              <div className="lower_text">
                <div className="lower_text_heading">Blog</div>
                <div className="lower_text_date">July 26, 2021</div>
                <div className="lower_text_description">
                  What leaders must know about branding and the Vampire Effect |
                  Corporality Global
                </div>
              </div>
            </div>

            <div
              className="image_side image_side_4 aos-init hm-right-side-div"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="0"
              id="image4"
            >
              <div className="upper_image fourth_img">
                <img src={img4} alt="" />
              </div>
              <div className="lower_text">
                <div className="lower_text_heading">Download Resources</div>
                <div className="lower_text_date">February 02, 2021</div>
                <div className="lower_text_description">
                  Trifold Corporality
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Library;
