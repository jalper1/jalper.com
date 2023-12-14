import React from "react";
import "./projectCard.css";

function ProjectCard({
  backgroundColor,
  link,
  title,
  description,
  image,
  ...props
}) {
  return (
    <a href={link} className="card-link" target="_blank">
      <div
        className="card-container"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="card-content">
          <img
            width={100}
            height={100}
            className="card-image"
            src={image}
            alt={`${image}-image`}
          />
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
