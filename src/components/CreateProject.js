import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../actions/projectActions";

function CreateProject(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.prevent.default();
    props.createProject({ title, content });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <input
            required
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-field">
          <textarea
            className="materialize-textarea"
            required
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
