import React from "react";

//styled components
import { About, Description, Image, Hide } from "../styles";

//framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contacts us for any photography ideas that you have. We have
          professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src="./img/home1.png"
          alt="guy with a camera"
        />
      </Image>
    </About>
  );
}

export default AboutSection;
