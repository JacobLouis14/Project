import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Discover from "../components/discover";
import Description from "../components/Description";

export default function Home({ heading }) {
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
      <Discover />
      <Description />
      <Footer />
    </div>
  );
}
