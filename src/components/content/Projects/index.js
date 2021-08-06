import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ProjectSection({ project }) {
  return (
    <div className="project-section my_6">
      <div className="project-text flex column justifyCenter">
        <div className="project-title subtitle mb_1">
          {project.title}
        </div>
        <div className="project-bullets">
        </div>
        <div className="body">
          {project.desc}
        </div>
      </div>
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
    { title: 'Enzuzo — Data Privacy Start-up', desc: 'For the last four months, I worked as a web developer for Enzuzo, helping to design and implement a new onboarding experience & a new dashboard.\n\nBeing a start-up, I also became the resident graphic designer.', img: 'enzuzo.svg' },
    { title: 'Fashion for Change', desc: 'In this non-profit organization, I took on the task of implementing the redesign of their website.\n\nFor the new site, I designed the architecture, implemented every page, and properly documented everything so future students can make easy updates.', img: 'fc.svg' },
    { title: 'IdVision', desc: 'For the last four months, I worked as a web developer for Enzuzo, helping to design and implement a new onboarding experience & a new dashboard. Being a start-up, I also became the resident graphic designer.', img: 'enzuzo.svg' },
    { title: 'Inclusify', desc: 'For the last four months, I worked as a web developer for Enzuzo, helping to design and implement a new onboarding experience & a new dashboard. Being a start-up, I also became the resident graphic designer.', img: 'fc.svg' },
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