import React from "react";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Contact from "./contact";
import Resume from "./resume";

// function Home ({ page })  {
//   switch (page) {
//     case "about me":
//         return <AboutMe />;
//     case "projects":
//         return <Projects />;   
//     case "contact":
//         return <Contact />;
//     case "resume":
//         return <Resume />;
//     default:
//         return <AboutMe />;
//   }
// }

function Home({ page }) {
    if (page === "about me") {
        return <AboutMe />;
    } else if (page === "projects") {
        return <Projects />;
    } else if (page === "contact") {
        return <Contact />;
    } else if (page === "resume") {
        return <Resume />;
    } else {
        return <AboutMe />;
    }
}

export default Home;