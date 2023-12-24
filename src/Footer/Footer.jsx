import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-component">
      <div className="footer-text">
        <p>Copyright © Jordan Alper 2024</p>
      </div>
      <div className="footer-about">
        <h3>About this website</h3>
        <p>
          I created this website using the React library and <br></br> the Vite
          framework so that you can see what I've done!
        </p>
      </div>
    </div>
  );
};

export default Footer;
