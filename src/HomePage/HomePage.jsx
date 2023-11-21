import React from "react";
import NavBar from "../NavBar/NavBar";
import "./homePage.css";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="welcome-container">
        <div className="welcome-text">
          <h1>Welcome!</h1>
        </div>
      </div>
    </>
  );
}

export default HomePage;
