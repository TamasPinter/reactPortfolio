import React from "react";
import TomatoesImg from "../Assets/database2.gif";
import BudgetGameImg from "../Assets/Hack.gif";
import TextImg from "../Assets/Tech.gif";
import SocialImg from "../Assets/Nano.gif";
import CodingImg from "../Assets/coding.gif";
import ArcadeImg from "../Assets/Arcade.gif";

function Projects() {
  const data = [
    {
      title: "Pearly Whites Dental Hygiene",
      description:
        "A mock website created for a Dental Hygiene Clinic in Milton Ontario.",
      imageLink: TextImg,
      activeLink: "https://tamaspinter.github.io/Dental/",
      repoLink: "https://github.com/TamasPinter/Dental.git",
    },
    {
      title: "Cafe Du Lait",
      description:
        "A social hub for coffee shop lovers including a round table chat function and cart for purchases.",
      imageLink: SocialImg,
      activeLink: "https://cafe-au-lait.herokuapp.com/",
      repoLink: "https://github.com/porteous89/cafe-au-lait",
    },
    {
      title: "Command Line Chain level Store Database",
      description:
        "A command line application used to track sales, inventory and stores on a chain level.",
      imageLink: TomatoesImg,
      activeLink: "https://github.com/TamasPinter/CLChainStoreDb",
      repoLink: "https://github.com/TamasPinter/CLChainStoreDb.git",
    },
    {
      title: "JavaScript Calculator",
      description:
        "A javaScript based calculator for simple math functions with a past calculations display.",
      imageLink: ArcadeImg,
      activeLink: "https://tamaspinter.github.io/ToPC/",
      repoLink: "https://github.com/TamasPinter/ToPC.git",
    },
    {
      title: "The Freshest Tomatoes",
      description:
        "A movie rating application for users to rate and review movies.",
      imageLink: BudgetGameImg,
      activeLink: "https://project-2-fresh-tomatoes.herokuapp.com/",
      repoLink: "https://github.com/porteous89/project-2-fresh-tomatoes",
    },

    {
      title: "Employee Database Backend",
      description:
        "A backend application for a Human Resource Department to track employees, roles and departments.",
      imageLink: CodingImg,
      activeLink: "https://github.com/TamasPinter/employeeTracker",
      repoLink: "https://github.com/TamasPinter/employeeTracker",
    },
  ];
  return (
    <div className="projects p-5 mb-4 bg-light container-fluid py-5 row">
      <h1 className="text-center">Projects</h1>
      {data.map((e, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          {/* Adjusted column size for better responsiveness */}
          <div
            className="card text-white bg-dark mb-3 boxes"
            style={{ height: "400px" }}
          >
            <h3 className="text-center">{e.title}</h3>
            <img
              src={e.imageLink}
              alt="projectImg"
              className="rounded mx-auto d-block img-fluid" // Added img-fluid class for responsive images
              style={{ maxHeight: "200px" }}
            />
            <p className="card-text mt-3">{e.description}</p>
            <br />
            <div className="card-body text-center">
              <a href={e.activeLink}>Live Application</a>
              <a href={e.repoLink}>Github Repository</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
