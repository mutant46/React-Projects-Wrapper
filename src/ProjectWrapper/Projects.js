// import data
import { ProjectData } from "../data";

// importing css files

import "./projects.css";

const Projects = () => {
  return (
    <div className="project-container">
      {ProjectData.map((show, index) => {
        return <Project {...show} key={index} />;
      })}{" "}
    </div>
  );
};

const Project = (props) => {
  const { name, img, link, topic } = props;
  return (
    <div className="project">
      <img src={img} alt="" />
      <div className="intro">
        <h2>
          Project Name: <span> {name} </span>
        </h2>
        <h4>
          Topic Coverd: <span> {topic} </span>
        </h4>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Go to website
        </a>
      </div>
    </div>
  );
};

export default Projects;
