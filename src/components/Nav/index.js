import React from "react"
import { Nav, Navbar, Container } from 'react-bootstrap';

function Navigation() {

  return(
      <Navbar bg="primary" variant="dark" style={{ zIndex: 2 }}>
        <Container>
          <Navbar.Brand href='/'>Julio Suarez</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-5">
              <Nav.Link href="/aboutme">About Me</Nav.Link>
              <Nav.Link href="/contact">Contact Me</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // <nav className="navbar navbar-expand-sm navbar-expand-lg navbar-expand-xl navbar-dark bg-primary justify-content-between">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/">Julio Suarez</a>
    //     <div className="collapse navbar-collapse" id="navbarColor02">
    //       <ul className="navbar-nav me-auto">
    //         <li className="nav-item mx-3">
    //           <a className="nav-link" href="#about" data-testid="about">
    //             About Me
    //           </a>
    //         </li>
    //         <li className="nav-item mx-3">
    //           <a className="nav-link" href="#portfolio" data-testid="portfolio">
    //             My Works
    //           </a>
    //         </li>
    //         <li className="nav-item mx-3">
    //           <span className="nav-link">Contact</span> {/* Add onClick later */}
    //         </li>
    //         <li className="nav-item mx-3">
    //           <span className="nav-link">Resume</span> {/* Find a way to maybe have resume pop up as a pdf. */}
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navigation