import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ProjectSection({ project }) {
  return (
    <div className="project-section mb_5">
      <div className="mock-website-container">
        <div className="mock-website-topbar flex alignItemsCenter">
          <div className="mock-website-circle" />
          <div className="mock-website-circle" />
          <div className="mock-website-circle" />
        </div>
        <div className="mock-website-page flex justifyCenter alignItemsCenter column">
          <div className="mock-website-content flex justifyCenter alignItemsCenter column">
            <img className="project-logo" src={`resources/${project.img}`} />
            <div className="button-container">
              <button className="mock-website-button mini">Click Me
              <div className="mock-website-button-hover" /></button>
            </div>
            <div className="button-container">
              <button className="mock-website-button mini">Click Me
              <div className="mock-website-button-hover" /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="project-text column">
        <div className="project-title subtitle mb_1">
          {project.title}
        </div>
        <div className="project-bullets">
        </div>
        <div className="body">
          {project.desc}
        </div>
      </div>
    </div>
  )
}

ProjectSection.propType = {
  project: PropTypes.object.isRequired
}
function Projects({ id }) {
  const projects = [
    { title: 'Fashion for Change Site Redesign', tools: ['React', 'Material UI'], link: 'https://github.com/annxiesun/fc-site' }
  ]
  const projects2 = [
    { title: 'Enzuzo — Data Privacy Start-up', desc: 'For the last four months, I worked as a web developer for Enzuzo, helping to design and implement a new onboarding experience & a new dashboard. Being a start-up, I also became the resident graphic designer.', img: 'enzuzo.svg' },
    { title: 'Fashion for Change', desc: 'For the last four months, I worked as a web developer for Enzuzo, helping to design and implement a new onboarding experience & a new dashboard. Being a start-up, I also became the resident graphic designer.', img: 'fc.svg' }
  ];

  return (
    <div id={id} className="section">
      <div className="projects-container section-container">
        <div className="h3 bold mb_3">My Work</div>
        <div className="project-card-container">
          {projects2.map((project) => (
            <ProjectSection key={project} project={project} />
          ))}
        </div>
        <br />
      </div>
    </div>
  );
}

Projects.propTypes = {
  id: PropTypes.string.isRequired
}

export default Projects;