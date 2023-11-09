import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Courses from "./Pages/Courses";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home heading={"Learn From The Masters"} />}
          />
          <Route path="/about" element={<About heading={"About us"} />} />
          <Route path="/courses" element={<Courses heading={"Courses"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
