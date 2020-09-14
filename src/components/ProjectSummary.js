import React from "react";

function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by ...</p>
        <p className="grey-text">3rd Sep, 2 AM</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
