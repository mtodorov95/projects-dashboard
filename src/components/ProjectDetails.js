import React from "react";

function ProjectDetails(props) {
  return (
    <div className="container section projectDetails">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Title - {props.match.params.id}</span>
          <p>Project content</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Author</div>
          <div>Date</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
