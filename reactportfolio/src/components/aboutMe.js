import React from "react";
import ProfilePic from "../Assets/TamasPinter.jpg";

function AboutMe() {
  return (
    <div className="about">
      <h1>About me</h1>
      <img className="me" src={ProfilePic} width="300" height="500" alt="my face" />
      <p>
        My name is Tamas (pronounced like Thomas) Pinter. I am a full stack developer looking to
        expand my knowledge and skillset through various projects. I enjoy the team aspects as well 
        as the individual aspects of coding. I am a quick learner and I am always looking to improve, 
        and not afraid to tackle a tough challenge. I love the puzzle aspect of coding and finding
        where that missing piece may lie. I enjoy the outdoors and love to take any opportunity
        to get out and explore. On my downtown I enjoy hockey and soccer, and any coop games I 
        can get my hands on with my son!
      </p>
    </div>
  );
}

export default AboutMe;