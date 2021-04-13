import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function ContactUs() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>our CONTACT</h1>
    </motion.div>
  );
}

export default ContactUs;
