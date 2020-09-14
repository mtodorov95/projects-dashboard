import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import CreateProject from "./components/CreateProject";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/create" component={CreateProject} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
