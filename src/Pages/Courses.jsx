import React from "react";
import Header from "../components/header";
import Landing from "../components/Landing";
import Footer from "../components/footer";
import CourseComponent from "../components/CourseComponent";

export default function Courses({ heading }) {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundImage: `url("src/assets/sketch-many-bulbs-background.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Landing heading={heading} />
      </div>
      <CourseComponent />
      <Footer />
    </div>
  );
}
