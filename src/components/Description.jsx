import React from "react";
import "./Description.css";
import { motion } from "framer-motion";

export default function Description() {
  // picture link
  const pictureLInk = [
    "https://www.learntos.com/images/logo/html.png",
    "https://www.learntos.com/images/logo/angular.png",
    "https://www.learntos.com/images/logo/sales-cloud.png",
    "https://www.learntos.com/images/logo/azure.png",
    "https://www.learntos.com/images/logo/selenium.png",
    "https://www.learntos.com/images/logo/power-bi.png",
    "https://www.learntos.com/images/logo/ielts.png",
  ];

  return (
    <div className="min-vh-100">
      <div className="row me-0 pt-1">
        {/** first col */}
        <div className="col-md-6 first-col-container pe-4">
          <motion.h3
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            style={{ fontFamily: "Agbalumo" }}
          >
            What makes us best ?
          </motion.h3>
          <div className="fs-3 fw-semibold pt-5 ps-lg-5 d-inline-flex flex-column">
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.5 },
              }}
              className="point-box shadow text-success"
              style={{ fontFamily: "Agbalumo" }}
            >
              Instructors with wealth of experience
            </motion.p>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              className="point-box shadow text-success"
              style={{ fontFamily: "Agbalumo" }}
            >
              Experiantial Learning
            </motion.p>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1.5 },
              }}
              className="point-box shadow text-success"
              style={{ fontFamily: "Agbalumo" }}
            >
              Flexible Learning Option
            </motion.p>
          </div>
          <div className=" d-flex justify-content-center pt-3">
            <p
              className="shadow d-inline-flex p-3 rounded-pill fw-bold"
              style={{ fontFamily: "Agbalumo" }}
            >
              Know More
            </p>
          </div>
        </div>
        {/**Second col */}
        <div className="col-md-6 second-col-container bg-success rounded ">
          <div className="row d-flex justify-content-evenly align-content-center h-100">
            <div className=" col-xxl-3 shapes shadow">
              <h4 className="text-success">Trust</h4>
              <p>
                Students have placed their trust in us and acquired training
                from us!
              </p>
            </div>
            <div className="col-xxl-3 shapes shadow">
              <h4 className="text-success">Education of high quality</h4>
              <p>
                We are dedicated to providing our students with the best
                education possible.
              </p>
            </div>
            <div className="col-xxl-3 shapes shadow">
              <h4 className="text-success">Assistance</h4>
              <p>Get expert assistance quickly.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row me-0 ms-0">
        <div className="col pt-5 pb-4">
          {pictureLInk.map((val) => (
            <img src={val} className="me-5 pt-5" />
          ))}
        </div>
      </div>
    </div>
  );
}
