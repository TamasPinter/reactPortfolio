import React from "react";

function Header({ page, setpage }) {
  const updatePage = (newPage) => {
    setpage(newPage);
  };
  return (
    <header>
      <h1>Tamas Pinter</h1>
      <nav>
        <div
          className={`${page === "about me" ? "highlight" : ""}`}
          onClick={() => {
            updatePage("about me");
          }}
        >
          about me
        </div>
        <div
          className={`${page === "projects" ? "highlight" : ""}`}
          onClick={() => {
            updatePage("projects");
          }}
        >
          projects
        </div>
        <div
          className={`${page === "contact" ? "highlight" : ""}`}
          onClick={() => {
            updatePage("contact");
          }}
        >
          contact
        </div>
        <div
          className={`${page === "resume" ? "highlight" : ""}`}
          onClick={() => {
            updatePage("resume");
          }}
        >
          resume
        </div>
      </nav>
    </header>
  );
}

export default Header;