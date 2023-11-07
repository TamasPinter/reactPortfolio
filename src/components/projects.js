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
      imageLink: TextImg,
      activeLink: "https://tamaspinter.github.io/Dental/",
      repoLink: "https://github.com/TamasPinter/Dental.git",
    },
    {
      title: "Cafe Du Lait",
      imageLink: SocialImg,
      activeLink: "https://cafe-au-lait.herokuapp.com/",
      repoLink: "https://github.com/porteous89/cafe-au-lait",
    },
    {
      title: "Command Line Chain level Store Database",
      imageLink: TomatoesImg,
      activeLink: "https://github.com/TamasPinter/CLChainStoreDb",
      repoLink: "https://github.com/TamasPinter/CLChainStoreDb.git",
    },
    {
      title: "JavaScript Calculator",
      imageLink: ArcadeImg,
      activeLink: "https://tamaspinter.github.io/ToPC/",
      repoLink: "https://github.com/TamasPinter/ToPC.git",
    },
    {
      title: "The Freshest Tomatoes",
      imageLink: BudgetGameImg,
      activeLink: "https://project-2-fresh-tomatoes.herokuapp.com/",
      repoLink: "https://github.com/porteous89/project-2-fresh-tomatoes",
    },

    {
      title: "Employee Database Backend",
      imageLink: CodingImg,
      activeLink: "https://github.com/TamasPinter/employeeTracker",
      repoLink: "https://github.com/TamasPinter/employeeTracker",
    },
  ];
  return (
    <div
      className="projects"
      class="p-5 mb-4 bg-light container-fluid py-5 row"
    >
      <h1 class="text-center">Projects</h1>
      {data.map((e) => (
        <div class="col-md-4">
          <div class="card text-white bg-dark mb-3 boxes">
            <h3 class="text-center">{e.title}</h3>
            <img
              src={e.imageLink}
              alt="projectImg"
              height="250"
              width="345"
              class="rounded mx-auto d-block"
            />
            <br />
            <div class="card-body text-center">
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
