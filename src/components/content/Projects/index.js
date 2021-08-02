import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Projects({ id }) {
  return (
    <div id={id}>
      <div className="header-container">
        <div className="h3 header-text">Hi! My name is Annie Sun</div>
        <div className="body header-text">making ideas come to life from design to implemention</div>
        <br/>
      </div>
    </div>
  );
}

Projects.propTypes = {
  id: PropTypes.string.isRequired
}

export default Projects;