import React from "react";

export default function Footer() {
  //Styles
  const Style = {
    cursor: {
      cursor: "pointer",
    },
  };

  return (
    <div className="bg-black p-5 fs-4 fw-bold text-success">
      <div className="row">
        <div className="col-md-4">
          <h2>Links</h2>
          <div className="d-flex flex-column fw-semibold  text-white">
            <span className="mt-3" style={Style.cursor}>
              Home
            </span>
            <span className="mt-3" style={Style.cursor}>
              About
            </span>
            <span className="mt-3" style={Style.cursor}>
              Contact
            </span>
            <span className="mt-3" style={Style.cursor}>
              Courses
            </span>
          </div>
        </div>
        <div className="col-md-4">
          <h2>Courses</h2>
          <div className="d-flex flex-column fw-semibold mb-1 text-white">
            <span className="mt-3" style={Style.cursor}>
              course1
            </span>
            <span className="mt-3" style={Style.cursor}>
              course2
            </span>
            <span className="mt-3" style={Style.cursor}>
              course3
            </span>
          </div>
        </div>
        <div className="col-md-4">
          <h2>Address</h2>
          <div>
            <span className="d-flex flex-column fw-semibold text-white">
              Rowdha Tower Passport Office Building Near Thrissur Railway
              Station Thrissur Kerala
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
