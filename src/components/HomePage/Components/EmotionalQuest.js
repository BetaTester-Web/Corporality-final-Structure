import React from "react";
import "./EmotionalQuest.css";
import eq_header from "./images/eq_header.png";
import eq_play from "./images/eq_play.png";
import cr from "./video/cr.mp4";
import cancel from "./images/cancel.png";

function EmotionalQuest() {
  function toggle() {
    var trailer = document.querySelector(".video_container");
    trailer.classList.toggle("active");

    // var video = document.querySelector("video");
    // trailer.classList.toggle("active");
    // video.pause();
    // video.currentTime = 0;
  }

  return (
    <>
      <div className="main-container pt-5 pb-5 p-3 ">
        <div className="video_side col-lg-6">
          <div className="video_image">
            <img src={eq_header} alt="" className="first_image" />
            <div className="video_button" onClick={toggle}>
              <img src={eq_play} alt="" />
            </div>
          </div>
        </div>
        <div className="text_side col-lg-6">
          <div className="text_heading">Our Emotional Quest</div>
          <div className="text_description">
            Are you ready to adopt the virtual work culture and go global?
            Making business human-to-human has never been easier. Train,
            educate, share, and enhance your customer experience by connecting
            with us online. With Corporality, you can learn how to utilise
            Google AdWords, maximize SEO, capture audiences with Video
            Marketing, and most of all, generate leads and enhance
            profitability. Sign up for our mailing list and we’ll make sure
            you’re always in touch with a willing business collaborator who will
            listen to your pains – and ready to turn them into gains. Wherever
            you are in the world, Corporality is just one click away.
          </div>
        </div>
      </div>

      <div className="video_container">
        <video src={cr} controls="true" autoPlay="true" />
        <img
          src={cancel}
          alt="Close"
          className="close_button"
          onClick={toggle}
        />
      </div>
    </>
  );
}

export default EmotionalQuest;
