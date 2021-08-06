
import React from 'react';
import Title from './content/Title';
import AboutMe from './content/AboutMe';
import Projects from './content/Projects';
import ContactMe from './content/ContactMe';
import './MasterView.css';
import SideMenu from './widgets/SideMenu/SideMenu';
import { Container, Row, Col } from 'react-bootstrap'

function MasterView() {
  const menuItems = [
    { label: 'Intro', id: 'title' },
    { label: 'Why Me?', id: 'about-me' },
    { label: 'My Work', id: 'projects' },
    { label: 'Contact Me', id: 'contact' }];

  return (
    <Container className="site-container justifyCenter">
      <Row>
        <SideMenu menuItems={menuItems} className="side-menu" />
        <div className="gradient-background">
          <Title id="title" />
          <img className="section-divider" src="resources/border.svg" />
          <AboutMe id="about-me" />
          <img className="section-divider" src="resources/border.svg" />
          <Projects id="projects" />
          <img className="section-divider" src="resources/border.svg" />
          <ContactMe id="contact" />
          <div className="footer" />
        </div>
      </Row>
    </Container>
  );
}

export default MasterView;