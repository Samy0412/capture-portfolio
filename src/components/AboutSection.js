import React from "react";

function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contacts us for any photography ideas that you have. We have
          professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img
          src="https://raw.githubusercontent.com/developedbyed/the-creative-react-course-capture/master/src/img/home1.png"
          alt="guy with a camera"
        />
      </div>
    </div>
  );
}

export default AboutSection;
