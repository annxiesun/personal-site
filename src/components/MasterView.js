
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
    <Container className="site-container">
      <Row>
        <Col md={2}>
          <SideMenu menuItems={menuItems} className="side-menu" />
        </Col>
        <Col md={10}>
          <div className="gradient-background">
            <Title id="title" />
            <AboutMe id="about-me" />
            <Projects id="projects" />
            <ContactMe id="contact" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MasterView;