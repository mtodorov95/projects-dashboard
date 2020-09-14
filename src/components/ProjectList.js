import React from "react";
import ProjectSummary from "./ProjectSummary";

function ProjectList({ projects }) {
  return (
    <div className="projectList section">
      {projects?.map((project) => (
        <ProjectSummary key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
