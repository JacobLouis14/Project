import React from "react";
import "./discover.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Discover() {
  const navigate = useNavigate();
  const courseViewHandler = () => {
    navigate("/courses");
  };

  return (
    <div className="min-vh-100 bg-success-subtle container-fluid discover-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        className="pt-5"
      >
        <h2 className="ps-md-5 " style={{ fontFamily: "Agbalumo" }}>
          Discover us
        </h2>
        <p className="ps-md-5">Find out all our areas of Training Programs</p>
      </motion.div>
      <div className="row pt-5 d-flex flex-row flex-wrap justify-content-center">
        {/* columns */}
        <motion.div
          className=" col-md-3 ms-md-2 mb-2 bg-success rounded-4 d-flex flex-column justify-content-between align-items-center course-box"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.1 },
          }}
        >
          <img
            src="https://www.learntos.com/images/icon/service4.png"
            height="200px"
            width="200px"
          />
          <div className="row">
            <div className="col-lg-10">
              <h4 className="ms-2">
                Microsoft Power BI Certification Training Course
              </h4>
            </div>
            <div className="col mb-2 d-flex justify-content-center align-items-center">
              <ion-icon name="arrow-forward-circle"></ion-icon>
            </div>
          </div>
        </motion.div>
        {/* columns */}
        <motion.div
          className="col-md-3 ms-md-2 mb-2 bg-success rounded-4 d-flex flex-column justify-content-between align-items-center course-box"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.5 },
          }}
        >
          <img
            src="https://www.learntos.com/images/icon/service2.png"
            height="200px"
            width="200px"
          />
          <div className="row">
            <div className="col-lg-10">
              <h4 className="ms-2">Angular Certification Training Course</h4>
            </div>
            <div className="col d-flex mb-2 justify-content-center align-items-center">
              <ion-icon name="arrow-forward-circle"></ion-icon>
            </div>
          </div>
        </motion.div>
        {/* columns */}
        <motion.div
          className="col-md-3 ms-md-2 mb-2 bg-success rounded-4 d-flex flex-column justify-content-between align-items-center course-box"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, delay: 1 },
          }}
        >
          <img
            src="https://www.learntos.com/images/icon/service3.png"
            height="200px"
            width="200px"
          />
          <div className="row">
            <div className="col-lg-10">
              <h4 className="ms-2">IoT Certification Training on Azure</h4>
            </div>
            <div className="col d-flex mb-2 justify-content-center align-items-center">
              <ion-icon name="arrow-forward-circle"></ion-icon>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="view-all-box ">
        <p style={{ fontFamily: "Agbalumo" }} onClick={courseViewHandler}>
          View all
        </p>
      </div>
    </div>
  );
}
