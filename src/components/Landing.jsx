import React from "react";
import "./Landing.css";
import { motion } from "framer-motion";

export default function Landing({ heading }) {
  return (
    <motion.div
      className="landingWrapper pe-3"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <div className="heading">
        <h2
          className=" fw-bold text-success "
          style={{ fontFamily: "Agbalumo" }}
        >
          {heading}
        </h2>
      </div>

      <p className=" text-white quote " style={{ fontFamily: "Agbalumo" }}>
        Learntos can help you advance your IT career!
      </p>
    </motion.div>
  );
}
