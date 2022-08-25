import React from "react"
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { navLinks } from "../../utils/navlinks";
const createLinks = (handle) => {
  return navLinks.map((e, index) => (
    <Nav.Item>
      <Nav.Link as={Link} to={`/${e.name}`}
        className="text-info"
        > {e.name}
      </Nav.Link>
    </Nav.Item>
  ))
}

function Navigation({currentCategory, handleCategoryChange}) {

  return(
      <Navbar bg="primary" variant="dark" style={{ zIndex: 2 }}>
        <Container>
          <Navbar.Brand href='/' className="text-info">Julio Suarez</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="px-5">
              {createLinks(handleCategoryChange)}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigation