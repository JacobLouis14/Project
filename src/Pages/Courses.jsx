import React from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import CourseComponent from "../components/CourseComponent";

export default function Courses({ heading }) {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundImage: `url("https://img.freepik.com/free-photo/sketch-many-bulbs-background_1379-291.jpg?w=1060&t=st=1699528102~exp=1699528702~hmac=436004cbea85f0e644e2d30804f70b11336d8026f4ad05c7f2f446d06db52b47")`,
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
