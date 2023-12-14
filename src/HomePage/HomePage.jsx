import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "./homePage.css";

function HomePage() {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="welcome-page">
      <NavBar />
      <div className="welcome-container">
        <div className="welcome-text">
          <h1>Software Engineer</h1>
          <p>and</p>
          <h1>Game Designer</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
