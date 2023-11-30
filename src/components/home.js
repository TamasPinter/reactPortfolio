import React from "react";
import AboutMe from "./aboutMe";
import Projects from "./projects";

import Resume from "./resume";

function Home({ page }) {
  if (page === "about me") {
    return <AboutMe />;
  } else if (page === "projects") {
    return <Projects />;
  } else if (page === "resume") {
    return <Resume />;
  } else {
    return <AboutMe />;
  }
}

export default Home;
