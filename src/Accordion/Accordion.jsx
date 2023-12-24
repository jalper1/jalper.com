import React, { useState } from "react";
import "./accordion.css";

function Accordion({ content, title, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordian ${isOpen ? "open" : ""}`}>
      <button className="accordian-title" onClick={toggleAccordion}>
        {title}
      </button>
      {isOpen && <div className="accordian-content">{content}</div>}
    </div>
  );
}

export default Accordion;
