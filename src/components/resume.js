import React from "react";
import MyResume from "../Assets/ResumePDF.pdf";
import Matrix from "../Assets/matrix.jpg";

function Resume() {
  return (
    <div className="resume" class="p-5 mb-4 bg-light container-fluid py-5 row">
      <div class="card">
        <h1 class="text-center">My Proficiencies</h1>
        <div class="rows-col-3" style={{ backgroundImage: `url(${Matrix})` }}>
          <div class="proficiencies">
            <div class="card-body boxes boxesTwo col-md-3">
              <button type="button" class="btn btn-primary">
                HTML<span class="badge bg-secondary"></span>
              </button>
            </div>
            <div class="card-body boxes boxesTwo col-3">
              <button type="button" class="btn btn-primary">
                CSS<span class="badge bg-success"></span>
              </button>
            </div>
            <div class="card-body boxes boxesTwo col-3">
              <button type="button" class="btn btn-primary">
                JavaScript<span class="badge bg-secondary"></span>
              </button>
            </div>
            <div class="card-body boxes boxesTwo col-3">
              <button type="button" class="btn btn-primary">
                JQUERY<span class="badge bg-secondary"></span>
              </button>
            </div>
            <div class="card-body boxes boxesTwo col-3">
              <button type="button" class="btn btn-primary">
                Node/NodeJS<span class="badge bg-secondary"></span>
              </button>
            </div>
            <div class="card-body boxes boxesTwo col-3">
              <button type="button" class="btn btn-primary">
                MongoDb<span class="badge bg-secondary"></span>
              </button>
            </div>
            <div class="card-body boxes boxesTwo col-3">
              <button type="button" class="btn btn-primary">
                React/Mern<span class="badge bg-secondary"></span>
              </button>
            </div>
            <div class="card-body boxes boxesTwo col-3">
              <button type="button" class="btn btn-primary">
                Front-End<span class="badge bg-secondary"></span>
              </button>
            </div>
            <div class="card-body boxes boxesTwo col-3">
              <button type="button" class="btn btn-primary">
                Back-End<span class="badge bg-secondary"></span>
              </button>
            </div>
            <div class="card-body boxes boxesTwo col-3">
              <button type="button" class="btn btn-primary">
                Canvas<span class="badge bg-secondary"></span>
              </button>
            </div>
            <div class="card-body boxes boxesTwo col-3">
              <button type="button" class="btn btn-primary">
                Responsivity<span class="badge bg-secondary"></span>
              </button>
            </div>
            <div class="card-body boxes boxesTwo col-3">
              <button type="button" class="btn btn-primary">
                Git-Workflow<span class="badge bg-secondary"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="resumeText" class="text-center">
        <a href={MyResume}>My Resume</a>
      </div>
    </div>
  );
}

export default Resume;
