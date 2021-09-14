import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import Github from '../../widgets/Icons/Github';

function InfoSection({ project }) {
  const {
    title,
    desc,
    win,
    link,
    points,
    tools
  } = project;

  return (
    <div className={styles.boundingBox}>
      <div className={`${styles.projectSection}`}>
        <div className={`container ${styles.titleBox} mb_1`}>
          <div className="h3 mr_1">{title}</div>
          <a className={styles.icon} href={link} target="_blank"><Github /></a>
        </div>
        <div className="body">{desc}</div>
        <div className={styles.chipContainer}>
          {tools.map((tool) => (
            <div className={`${styles.toolChip} mini`}>{tool}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
AboutMe.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  parity: PropTypes.bool.isRequired,
  animation: PropTypes.object.isRequired,
}


function AboutMe({ id }) {
  const content = [
    {
      title: 'Coda',
      desc: 'Quick-add songs to your spotify playlist',
      win: false,
      link: 'https://github.com/annxiesun/coda',
      points: [
        'Implemented server-side functionalities with Axios',
        'Integrated user-interface to with server'
      ],
      tools: [
        'React',
        'Next.js',
        'Typescript',
      ]
    },
    {
      title: 'Ingrid',
      desc: 'A heat-map visualizer for Educational Apps',
      win: true,
      link: 'https://github.com/ul-hacks',
      points: [
        'Designed the UI and created mockups using Figma',
        'Implemented front-end features and user-interface'
      ],
      tools: [
        'React',
        'MaterialUI',
        'JavaScript',
        'GraphQL'
      ]
    },
    {
      title: 'Inclusify',
      desc: 'An app that detects non-inclusive language and suggests alternative words',
      win: true,
      link: 'https://github.com/annxiesun/inclusify',
      points: [
        'Designed an intuitive user-experience',
        'Implemented entire front-end'
      ],
      tools: [
        'React',
        'JavaScript'
      ]
    },
    {
      title: 'FeatherFinder',
      desc: 'An elevated quiz experience that tells you what kind of bird you are',
      win: true,
      link: 'https://github.com/annxiesun/birdquiz',
      tools: [
        'React',
        'JavaScript'
      ]
    },
  ];
  return (
    <div id={id} className="section">
      <div className="section-container">
        <div className="h3 bold">My Projects</div>
        <div className={styles.projectContainer}>
          {content.map((project) => (
            <InfoSection key={project.title} project={project} />
          ))}
        </div>
        <br />
      </div>
    </div>
  );
}

AboutMe.propTypes = {
  id: PropTypes.string.isRequired
}

export default AboutMe;