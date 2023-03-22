import React from "react";
import github from "../Assets/github.png";
import linkedin from "../Assets/linkdin.png";


function Footer() {
  return (
    <div className="footer" class="text-center">
        <a href="https://github.com/TamasPinter">
          <img src={github} alt="Find me on github" height="100" width="100" />
        </a>
        <a href="https://www.linkedin.com/in/tamas-pinter-2876b026a/">
          <img src={linkedin} alt="Find me on linkedin" height="100" width="100" />
        </a>
     
      <div class="text-center">
        <p>Tamas Pinter</p>
        <p>Kitchener, ON</p>
        <p>tamaspinter13@gmail.com</p>
        <p>226-606-7451</p>
      </div>
    </div>
  );
}

export default Footer;