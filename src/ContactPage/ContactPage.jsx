import React from "react";
import NavBar from "../NavBar/NavBar";
import "./contactPage.css";

function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <div className="contact-text">
          <h1>Contact Me!</h1>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
