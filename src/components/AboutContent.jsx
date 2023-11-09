import React from "react";

export default function AboutContent() {
  return (
    <div className="bg-white ps-3">
      <div className="d-flex justify-content-center">
        <h2
          className="pt-4 fw-bold "
          style={{ fontFamily: "Agbalumo", fontSize: "4rem" }}
        >
          We’r the top rated agency.
        </h2>
      </div>
      {/**first row */}
      <div className="row min-vh-100 me-0 pt-5">
        <div className="col-xl-6">
          <div className="d-flex flex-column justify-content-center h-100">
            <img
              src="https://www.learntos.com/images/media/img_90.jpg"
              width="100%"
            />
          </div>
        </div>
        <div className="col-xl-6">
          <span className="fs-5">
            <p style={{ textAlign: "justify" }}>
              Learntos is an IT training company established in 2019 with a
              mission to empower individuals and organizations with the latest
              technological skills and knowledge to thrive in today's fast-paced
              digital world. With a team of highly experienced trainers and
              experts in various IT fields, Learntos offers a wide range of
              training programs, including web development, software
              engineering, data science, cybersecurity, cloud computing, and
              digital marketing. At Learntos, we believe in delivering
              high-quality training programs that are tailored to meet the
              specific needs and requirements of our clients. Whether you are an
              individual looking to upskill yourself or an organization seeking
              to enhance the capabilities of your employees, we offer customized
              training solutions that are designed to meet your unique needs.
            </p>
            <p style={{ textAlign: "justify" }}>
              Our training programs are designed to be highly interactive,
              practical, and engaging. We use a combination of classroom
              lectures, hands-on exercises, and real-world projects to ensure
              that our students not only learn the theory but also gain
              practical experience and skills that are applicable in the
              workplace. At Learntos, we are committed to providing our students
              with the best possible learning experience. We strive to create a
              friendly and supportive learning environment where our students
              can feel comfortable asking questions, sharing their ideas, and
              collaborating with their peers. Since our inception, Learntos has
              trained hundreds of students and helped many organizations enhance
              their IT capabilities. We are proud of our achievements and look
              forward to continuing to empower individuals and organizations
              with the latest technological skills and knowledge for many years
              to come.
            </p>
          </span>
        </div>
      </div>
      {/**Second row */}
      <div className="min-vh-100 pe-5 ps-3 pt-3">
        <div className="row me-0 ps-md-5 pe-md-5">
          <div className="col-lg-8  d-flex flex-column justify-content-center">
            <h2 className="fs-1" style={{ fontFamily: "Agbalumo" }}>
              Vision
            </h2>
            <p className="fs-5" style={{ textAlign: "justify" }}>
              To be a leading global IT training company that empowers
              individuals and organizations with the latest technological skills
              and knowledge to thrive in a constantly evolving digital world.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="https://www.learntos.com/images/media/vision.jpg"
              width="100%"
            />
          </div>
        </div>
        <div className="row me-0 ps-md-5 pe-md-5 pt-5">
          <div className="col-lg-4">
            <img
              src="https://www.learntos.com/images/media/mission.jpg"
              width="100%"
            />
          </div>
          <div className="col-lg-8 ps-lg-5 d-flex flex-column justify-content-center">
            <h2 className="fs-1" style={{ fontFamily: "Agbalumo" }}>
              Mission
            </h2>
            <p className="fs-5" style={{ textAlign: "justify" }}>
              Our mission is to provide high-quality, customized IT training
              solutions that enable individuals and organizations to achieve
              their full potential. We are committed to delivering practical and
              engaging training programs that equip our students with the skills
              and knowledge needed to succeed in their chosen IT fields. We aim
              to create a supportive learning environment where our students can
              develop their confidence, creativity, and problem-solving skills
              while collaborating with their peers. At Learntos, we are
              dedicated to making a positive impact on the lives of our students
              and the organizations we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
