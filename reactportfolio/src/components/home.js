import React from "react";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Contact from "./contact";
import Resume from "./resume";

function Home({ page }) {
  switch (page) {
    case "about me":
        return <AboutMe />;
    case "projects":
        return <Projects />;   
    case "contact":
        return <Contact />;
    case "resume":
        return <Resume />;
    default:
        return <AboutMe />;
  }
}

export default Home;