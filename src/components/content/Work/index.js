import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Fade from 'react-reveal/Fade';
import Github from '../../widgets/Icons/Github';

function ProjectSection({ project }) {
  const {
    title,
    desc,
    role,
    time,
    companySite,
    gitLink,
  } = project;

  const openLink = (link) => {
    window.open(
      link,
      '_blank' // <- This is what makes it open in a new window.
    );
  }
  return (
    <div className="project-section my_6">
      <Fade>
        <div className="project-text flex column justifyCenter">
          <div className="project-title subtitle mb_1">
            {title}
          </div>
          <div className="project-bullets">
          </div>
          <div className="body">
            {time}
            <br/>
            -
            <br/>
            {role}
            <br/>
            -
            <br/>
            {desc}
          </div>
        </div>
      </Fade>
      <Fade delay={500}>
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
                <button onClick={() => openLink(companySite)} className="mock-website-button mini">Visit Site
                  <div className="mock-website-button-hover" /></button>
              </div>
              {gitLink &&
                <div className="button-container">
                  <button onClick={() => openLink(gitLink)} className="mock-website-button mini">Github
                    <Github className="gitIconSite" />
                    <div className="mock-website-button-hover" /></button>
                </div>
              }
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

ProjectSection.propType = {
  project: PropTypes.object.isRequired
}
function Projects({ id }) {
  const projects2 = [
    {
      title: 'Square',
      time: 'Fall 2022',
      role: 'Web Developer',
      desc: 'For the last four months, I have been working as a Web Developer at Square! \n\nIn my role, I worked on one main user-facing project, and from that project, I got to experience the end-to-end process of building and releasing a new feature.',
      img: 'square.svg',
      companySite: 'https://squareup.com/ca/en',
    },
    {
      title: 'Reekon — Hardware Start-up',
      time: 'Winter 2022',
      role: 'Mobile Developer',
      desc: 'From my second co-op, I worked as a Mobile Developer at Reekon Tools, and I took on a lot of responsibility. \n\nIn my role, I was tasked with building a full-stack mobile app from scratch, and I was invovled with working at every part of the process. I designed and implemented the entire front-end of the app and I also helped with implementing their new API. ',
      img: 'reekon.svg',
      companySite: 'https://www.reekon.tools/',
    },
    {
      title: 'Enzuzo — Data Privacy Start-up',
      time: 'Summer 2021',
      role: 'Web Developer',
      desc: 'For my first co-op, I worked as a web developer for Enzuzo, helping to design and implement a new onboarding experience & a new dashboard.\n\nBeing a start-up, I also became the resident graphic designer.',
      img: 'enzuzo.svg',
      companySite: 'https://app.enzuzo.com/onboarding'
    },
    
  ];

  return (
    <div id={id} className="section">
      <div className="projects-container section-container">
        <div className="h3 bold mb_3">My Work</div>
        <div className="content-container">
          <div className="timeline">
            <div className="small-circle" />
            <div className="line" />
            <div className="small-circle" />
            <div className="line" />
            <div className="small-circle" />
            <div className="line" />
            <div className="small-circle" />
          </div>
          <div className="project-card-container">
            {projects2.map((project) => (
              <ProjectSection key={project} project={project} />
            ))}
          </div>
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