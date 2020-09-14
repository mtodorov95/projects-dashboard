import React from "react";
import ProjectSummary from "./ProjectSummary";

function ProjectList() {
  return (
    <div className="projectList section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
}

export default ProjectList;
