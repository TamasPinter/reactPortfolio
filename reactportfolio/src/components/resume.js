import React from "react";
import MyResume from "../Assets/Resume.pdf";

function Resume() {
  return (
    <div className="resume">
      <div>
        <h1>My Proficiencies</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Jquery</li>
          <li>Node JS</li>
          <li>React </li>
          <li>MERN</li>
        </ul>
      </div>
      <div className="resumeText">
        <a href={MyResume}>My Resume</a>
      </div>
    </div>
  );
}

export default Resume;