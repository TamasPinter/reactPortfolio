import React, { useState } from "react";
import NavTabs from "./navTabs";
import Home from "./components/home";
import Projects from "./components/projects";

import Resume from "./components/resume";
import Footer from "./components/footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }

    if (currentPage === "Projects") {
      return <Projects />;
    }

    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
