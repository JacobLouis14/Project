import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Header.css";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuShown, setIsMenuShown] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia("(max-width: 800px)");

    setIsMobile(matchMedia.matches);

    const mediaQueryHandler = (event) => {
      setIsMobile(event.matches);
    };
    matchMedia.addEventListener("change", mediaQueryHandler);
    return () => {
      matchMedia.removeEventListener("change", mediaQueryHandler);
    };
  }, []);

  const toggleAction = () => {
    setIsMenuShown(!menuShown);
  };

  const navigate = useNavigate();

  const aboutHandler = () => {
    navigate("/about");
  };
  const homeHandler = () => {
    navigate("/");
  };
  const coursesHandler = () => {
    navigate("/courses");
  };

  return (
    <div className="position-absolute top-0 w-100 d-flex flex-row justify-content-between p-4">
      <div className="logo">Logo</div>
      <div className={`d-flex${isMobile ? "flex-column" : "flex-row"} `}>
        {isMobile ? (
          <div onClick={toggleAction}>
            <ion-icon name="menu" />
          </div>
        ) : (
          <Menu />
        )}
        {isMobile && menuShown && (
          <div className="menuContainer d-flex flex-column  fs-5 fw-semibold text-white">
            <span className="me-4 cursor" onClick={homeHandler}>
              Home
            </span>
            <span className="me-4 cursor" onClick={aboutHandler}>
              About
            </span>
            <span className="me-4 cursor" onClick={coursesHandler}>
              Courses
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

const Menu = () => {
  const navigate = useNavigate();

  const aboutHandler = () => {
    navigate("/about");
  };
  const homeHandler = () => {
    navigate("/");
  };
  const coursesHandler = () => {
    navigate("/courses");
  };
  return (
    <div className="menuContainer me-5 fs-5 fw-semibold text-white">
      <span className="me-4 cursor" onClick={homeHandler}>
        Home
      </span>
      <span className="me-4 cursor" onClick={aboutHandler}>
        About
      </span>
      <span className="me-4 cursor" onClick={coursesHandler}>
        Courses
      </span>
    </div>
  );
};
