import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function AboutMe({ id }) {
  return (
    <div id={id}>
      <div className="header-container">
        <div className="h3 white header-text">Hi! My name is Annie Sun</div>
        <div className="body white header-text">making ideas come to life from design to implemention</div>
        <br/>
      </div>
      <div id="star-container" className="star-container" />
    </div>
  );
}

AboutMe.propTypes = {
  id: PropTypes.string.isRequired
}

export default AboutMe;