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
      title: "The Best Game For Your Buck",
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
    <div className="projects">
      <h1>Projects</h1>
      {data.map((e) => (
        <div>
          <h3>{e.title}</h3>
          <img src={e.imageLink} alt="projectImg" />
          <a href={e.activeLink}>Live Application</a>
          <a href={e.repoLink}>Github Repository</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;