import React from "react";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServiceSection from "../components/ServiceSection";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function AboutUs() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  );
}

export default AboutUs;
