import React from "react";
import ProfilePic from "../Assets/TamasPinter.jpg";

function AboutMe() {
  return (
    <div class="p-5 mb-4 bg-light bio container-fluid py-5">
      <h1 class="display-5 fw-bold text-center">Tamas Pinter</h1>
      <div class="aboutMe">
        <div class="profilePic">
          <img
            className="rounded profilePic mx-auto d-block"
            src={ProfilePic}
            width="400"
            height="650"
            alt="my face"
          />
        </div>
        <div class="bioBlurb">
          <p class="border border-dark border-2 shadow-sm p-3 mb-5 bg-body rounded">
            My name is Tamas (pronounced like Thomas) Pinter from Kitchener,
            Ontario! I am a full stack developer looking to expand my knowledge
            and skillset through various projects. I enjoy the team aspects as
            well as the individual aspects of coding. I am a quick learner and I
            am always looking to improve, and not afraid to tackle a tough
            challenge. I love the puzzle aspect of coding and finding where that
            missing piece may lie. My strengths lie in JavasScript and React,
            creating a dynamic front end, but I am also proficient in MySQL,
            MongoDB, and Node.js.
            <br />
            <br />
            <p style={{ textIndent: 50 }}>
              I have created projects I'm very proud of and you can find some on
              my projects page. They range from webpages for a Dental Hygiene
              Clinic to a function calculater based on reactive javascript user
              input, and database type applications that can be used by a Human
              Resource Department. I have also created a backend for a chain
              level group of electronic stores. They can all be found on my
              projects page!
            </p>
            <p style={{ textIndent: 50 }}>
              {" "}
              I used a seperate server for the Open/Close dates on the Hygiene
              Clinic webpage that receives a call and displays the appointment
              times. It is a very fluid page with lots of promise for a real
              world application. My database applications all use MySQL to
              create dynamic results and proper outputs for their needs. I enjoy
              both front end planning and back end construction on these
              projects. Please feel free to have a look and don't be afraid to
              reach out with any questions or comments.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
