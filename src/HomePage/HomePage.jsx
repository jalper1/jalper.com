import React from "react";
import NavBar from "../NavBar/NavBar";
import "./homePage.css";
import photo from "../assets/react.svg";

function HomePage() {
  return (
    <>
      <NavBar />
      <div
        className="welcome-container"
        style={
          {
            //backgroundImage: `url(${photo})`,
          }
        }
      >
        <div className="welcome-text">
          <h1>Software Engineer</h1>
          <p>and</p>
          <h1>Game Designer</h1>
        </div>
      </div>
    </>
  );
}

export default HomePage;
