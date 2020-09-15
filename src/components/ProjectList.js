import React from "react";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

function ProjectList({ projects }) {
  return (
    <div className="projectList section">
      {projects?.map((project) => (
        <Link to={"/project/" + project.id}>
          <ProjectSummary key={project.id} project={project} />
        </Link>
      ))}
    </div>
  );
}

export default ProjectList;
