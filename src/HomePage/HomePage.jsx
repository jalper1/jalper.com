// HomePage.jsx
import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./homePage.css";

function HomePage() {
  const [jobTitle, setJobTitle] = useState("Software Engineer");
  const jobTitles = [
    "Game Designer",
    "Problem Solver",
    "Team Player",
    "Critical Thinker",
    "Creative Innovater",
    "Motivated Learner",
    "Software Engineer",
  ];
  let titleIndex = 0;

  useEffect(() => {
    document.body.classList.add("no-scroll");

    const typingInterval = setInterval(() => {
      setJobTitle(jobTitles[titleIndex]);
      titleIndex = (titleIndex + 1) % jobTitles.length;
    }, 3000);

    return () => {
      document.body.classList.remove("no-scroll");
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="welcome-page">
      <NavBar />
      <div className="welcome-container">
        <div className="welcome-text">
          <h1 className="animated-text-header">I'm a</h1>
          <h1 className="animated-text">{jobTitle.trim()}</h1>
          <div className="welcome-message">
            <p>
              Thanks for dropping by! Explore my work history, projects, and
              contact information.
            </p>
          </div>
          <button
            className="explore-button"
            onClick={() => {
              window.location.href = "/projectpage";
            }}
          >
            Explore My Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
