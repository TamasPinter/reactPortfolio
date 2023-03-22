import React from "react";
import TomatoesImg from "../Assets/database2.gif";
import BudgetGameImg from "../Assets/Hack.gif";
import TextImg from "../Assets/Tech.gif";
import SocialImg from "../Assets/Nano.gif";


function Projects() {
  const data = [
    {
      title: "Freshest Tomatoes",
      imageLink: TomatoesImg,
      activeLink: "https://project-2-fresh-tomatoes.herokuapp.com/",
      repoLink: "https://github.com/porteous89/project-2-fresh-tomatoes",
    },
    {
      title: "Best Game For Your Buck",
      imageLink: BudgetGameImg,
      activeLink: "https://mitsushiro1.github.io/The-best-game-for-your-buck/",
      repoLink: "https://github.com/mitsushiro1/The-best-game-for-your-buck",
    },
    {
      title: "PWA Text Editor",
      imageLink: TextImg,
      activeLink: "https://mysterious-stream-67239.herokuapp.com/",
      repoLink: "https://github.com/TamasPinter/Text_EditorPWA",
    },
    {
      title: "Social Media Backend",
      imageLink: SocialImg,
      activeLink: "",
      repoLink: "https://github.com/TamasPinter/socialMedia",
    },
    
  ];
  return (
    <div className="projects" class="p-5 mb-4 bg-light container-fluid py-5 row">
      <h1 class="text-center">Projects</h1>
      {data.map((e) => (
        <div class="col-md-3">
        <div class="card text-white bg-dark mb-3 boxes">
          <h3 class="text-center">{e.title}</h3>
          <img src={e.imageLink} alt="projectImg" height="250" width="345" class="rounded mx-auto d-block"/><br/>
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