import React from 'react'

import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap'

import './Navigation.css'

import { USER_PROFILE_URL } from '../../Resources/Constants'

const Navigation = () => {
  return (
    <Navbar sticky="top" collapseOnSelect bg="primary" data-bs-theme="dark" expand="lg" className="Navigation">
      <Container>
        <Navbar.Brand href="#home"><Image roundedCircle  src={USER_PROFILE_URL} alt='Hi'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='justify-content-around' id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#AboutMe">About Me</Nav.Link>
            <NavDropdown title="Projects"  id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation