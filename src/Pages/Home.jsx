import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Landing from "../components/Landing";
import Discover from "../components/discover";
import Description from "../components/Description";

export default function Home({ heading }) {
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
      <Discover />
      <Description />
      <Footer />
    </div>
  );
}
