import React from 'react';
import PropTypes from 'prop-types';
import Lottie from "react-lottie";
import blink from '../../../animations/blink.json'
import laptop from '../../../animations/laptop.json'
import './style.css';

function InfoSection({ title, desc, animation, parity }) {
  const animationData = {
    animationData: animation,
    loop: true,
    autoplay: true,
  };

  return (
    <div className="container info-section">
      <div className="about-image">
        <Lottie renderer="canvas" options={animationData} className="animation-container" loop={false} isClickToPauseDisabled />;
      </div>
      <div className="about-text">
        <div className="h3 about-title mb_2">{title}</div>
        <div className="body">{desc}</div>
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
  const aboutMe = "Well, for one I have a lot passion AND the skills to back it up! I’m a computer science student, specializing in Human-Computer Interaction and I just love creating things!";

  const content = [
    { title: 'Mockups in a blink of an eye', desc: 'From wireframing to prototyping, low to high fidelity, get comprehensive and beautifully designed user-experiences quick & easily', animation: blink},
    { title: 'Seamless implementations', desc: 'Writing responsive and interactive user-interfaces using modern languages and frameworks', animation: laptop},
    { title: 'Code that’s designed to last', desc: 'Writing scalable, clean, and organized solutions to stand the test of time', animation: blink }
  ];

  return (
    <div id={id} className="section">
      <div className="about-me-container section-container">
        <div className="h3 bold">Why Choose Me?</div>
        <div className="body">{aboutMe}</div>
        <div className="column-container">
          {content.map((section, i) => (
            <InfoSection key={section.title} title={section.title} desc={section.desc} parity={i % 2 === 0} animation={section.animation} />
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