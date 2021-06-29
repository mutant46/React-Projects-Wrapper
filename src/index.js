import React from "react";
import reactDom from "react-dom";

// css files

import "./index.css";

// Importing Apps

import Viewport from "./viewport/Viewport";
import Projects from "./ProjectWrapper/Projects";

const App = () => {
  return (
    <main>
      <Viewport />
      <h1
        style={{
          padding: "2em 0em 0.5em 0em",
          textAlign: "center",
          letterSpacing: "3px",
        }}
      >
        PROJECTS
      </h1>
      <Projects />
    </main>
  );
};

reactDom.render(<App />, document.getElementById("root"));
