import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
