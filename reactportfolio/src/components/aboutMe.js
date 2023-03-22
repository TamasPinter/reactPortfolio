import React from "react";
import ProfilePic from "../Assets/TamasPinter.jpg";

function AboutMe() {
  return (
    <div class="p-5 mb-4 bg-light container-fluid py-5">
      <h1 class="display-5 fw-bold text-center">About me</h1>
      <img className="rounded mx-auto d-block" src={ProfilePic} width="400" height="650" alt="my face" />
      <p class="border border-dark border-2 shadow-sm p-3 mb-5 bg-body rounded">
          My name is Tamas (pronounced like Thomas) Pinter. I am a full stack developer looking to
        expand my knowledge and skillset through various projects. I enjoy the team aspects as well 
        as the individual aspects of coding. I am a quick learner and I am always looking to improve, 
        and not afraid to tackle a tough challenge. I love the puzzle aspect of coding and finding
        where that missing piece may lie. I enjoy the outdoors and love to take any opportunity
        to get out and explore. On my downtown I enjoy hockey and soccer, and any co-op games I 
        can get my hands on with my son!
      </p>
    
    </div>
  );
}

export default AboutMe;