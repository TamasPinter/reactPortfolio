import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#home" onClick={() => handlePageChange("Home")} className={currentPage === "Home" ? "nav-link active" : "nav-link"}>
                    home</a>
                    </li>
            
            <li className="nav-item">
                <a href="#projects" onClick={() => handlePageChange("Projects")} className={currentPage === "Projects" ? "nav-link active" : "nav-link"}>
                    projects</a>
                    </li>
            <li className="nav-item">
                <a href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>
                    contact</a>
                    </li>
            <li className="nav-item">
                <a href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>
                    resume</a>
                    </li>
        </ul>
    );
}

export default NavTabs;