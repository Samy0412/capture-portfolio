import React from "react";

//styled components
import { About, Description, Image, Hide } from "../styles";

//framer Motion
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contacts us for any photography ideas that you have. We have
          professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src="./img/home1.png" alt="guy with a camera" />
      </Image>
    </About>
  );
}

export default AboutSection;
