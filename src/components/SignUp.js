import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../actions/authActions";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signUp({ email, password, username });
  };
  if (props.auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <input
            required
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            required
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            required
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          {props.authError && (
            <div className="red-text center">{props.authError}</div>
          )}
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
