import React from "react";
import { motion } from "framer-motion";

export default function CourseComponent() {
  return (
    <div className="pt-4 min-vh-100">
      <h4
        className="text-center text-success fs-3"
        style={{ fontFamily: "Agbalumo" }}
      >
        “Unlock your potential with our comprehensive training courses,
        <br /> designed to empower you with the skills you need.”
      </h4>
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-1 me-0 ms-0 mt-5">
        {/**Cols */}
        <div className="col ps-3 pe-3 mb-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border bg-success-subtle border-success rounded-5 d-flex flex-column align-items-center h-100"
          >
            <img src="https://www.learntos.com/images/icon/service1.png" />
            <span className="fs-4 text-center fw-semibold p-2 ">
              Salesforce Admin 201 Certification Training
            </span>
            <p className="p-2 text-center">
              Be a CRM and Cloud Computing expert
            </p>
          </motion.div>
        </div>
        {/**Cols */}
        <div className="col ps-3 pe-3 mb-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border bg-success-subtle border-success rounded-5 d-flex flex-column align-items-center h-100"
          >
            <img src="https://www.learntos.com/images/icon/service2.png" />
            <span className="fs-4 text-center fw-semibold p-2 ">
              Angular Certification Training Course
            </span>
            <p className="p-2 text-center">Master Web Applications</p>
          </motion.div>
        </div>
        {/**Cols */}
        <div className="col ps-3 pe-3 mb-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border bg-success-subtle border-success rounded-5 d-flex flex-column align-items-center h-100"
          >
            <img src="https://www.learntos.com/images/icon/services6.png" />
            <span className="fs-4 text-center fw-semibold p-2 ">
              Web Developer Certification Training
            </span>
            <p className="p-2 text-center">Learn the Art of Web Development</p>
          </motion.div>
        </div>
        {/**Cols */}
        <div className="col ps-3 pe-3 mb-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border bg-success-subtle border-success rounded-5 d-flex flex-column align-items-center h-100"
          >
            <img src="https://www.learntos.com/images/icon/service3.png" />
            <span className="fs-4 text-center fw-semibold p-2 ">
              IoT Certification Training on Azure
            </span>
            <p className="p-2 text-center">Become an IOT Developer</p>
          </motion.div>
        </div>
        {/**Cols */}
        <div className="col ps-3 pe-3 mb-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border bg-success-subtle border-success rounded-5 d-flex flex-column align-items-center h-100"
          >
            <img src="https://www.learntos.com/images/icon/services4.png" />
            <span className="fs-4 text-center fw-semibold p-2 ">
              Microsoft Power BI Certification Training Course
            </span>
            <p className="p-2 text-center">Gain Data Modeling Capabilities</p>
          </motion.div>
        </div>
        {/**Cols */}
        <div className="col ps-3 pe-3 mb-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border bg-success-subtle border-success rounded-5 d-flex flex-column align-items-center h-100"
          >
            <img src="https://www.learntos.com/images/icon/services5.png" />
            <span className="fs-4 text-center fw-semibold p-2 ">
              Selenium Certification Training Course
            </span>
            <p className="p-2 text-center">
              Discover the Fundamentals of Selenium Components
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
