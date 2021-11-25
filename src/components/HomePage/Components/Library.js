import React from "react";
import "./Library.css";
import img1 from "./images/blog/img1.jpg";
import img2 from "./images/blog/img2.jpg";
import img3 from "./images/blog/img3.jpg";
import img4 from "./images/blog/img4.jpg";

function Library() {
  function showimage1() {
    document.getElementById("image1").style.display = "block";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";
    document.getElementById("image4").style.display = "none";
  }

  function showimage2() {
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "block";
    document.getElementById("image3").style.display = "none";
    document.getElementById("image4").style.display = "none";
  }

  function showimage3() {
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "block";
    document.getElementById("image4").style.display = "none";
  }

  function showimage4() {
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";
    document.getElementById("image4").style.display = "block";
  }

  return (
    <>
      <div className="main_container">
        <div className="content_side">
          <div
            className="text1 text_active aos-init"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-offset="0"
            onClick={showimage1}
          >
            Industry Research
          </div>
          <div
            className="text1  aos-init"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-offset="0"
            onClick={showimage2}
          >
            Video Library
          </div>
          <div
            className="text1  aos-init"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-offset="0"
            onClick={showimage3}
          >
            Blog
          </div>
          <div
            className="text1  aos-init"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-offset="0"
            onClick={showimage4}
          >
            Download Resources
          </div>
        </div>

        <div
          className="image_side  aos-init"
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
          className="image_side image_side_2  aos-init"
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
          className="image_side image_side_3  aos-init"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-offset="0"
          id="image3"
        >
          <div className="upper_image">
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
          className="image_side image_side_4  aos-init"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-offset="0"
          id="image4"
        >
          <div className="upper_image">
            <img src={img4} alt="" />
          </div>
          <div className="lower_text">
            <div className="lower_text_heading">Download Resources</div>
            <div className="lower_text_date">February 02, 2021</div>
            <div className="lower_text_description">Trifold Corporality</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Library;
