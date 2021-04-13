import React from "react";

//styles
import styled from "styled-components";

//styled components
import { About, Description, Image, Hide } from "../styles";

function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contacts us for any photography ideas that you have. We have
          professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img
          src="https://raw.githubusercontent.com/developedbyed/the-creative-react-course-capture/master/src/img/home1.png"
          alt="guy with a camera"
        />
      </Image>
    </About>
  );
}

export default AboutSection;
