import React from "react";
import NavBar from "../NavBar/NavBar";
import "./contactPage.css";

function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <div className="contact-text">
          <h1>Email: alperjordan@gmail.com</h1>
          <h1>Phone Number: (+1) 781-504-2001</h1>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
