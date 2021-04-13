import React from "react";

//styles
import styled from "styled-components";

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

//styled components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
