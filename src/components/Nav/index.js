import React from "react";

function Nav() {
  return(
    <nav className="navbar navbar-expand-sm navbar-expand-lg navbar-expand-xl navbar-dark bg-primary justify-content-between">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Julio Suarez</a>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item mx-3">
              <a className="nav-link" href="#about" data-testid="about">
                About Me
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#portfolio" data-testid="portfolio">
                My Works
              </a>
            </li>
            <li className="nav-item mx-3">
              <span className="nav-link">Contact</span> {/* Add onClick later */}
            </li>
            <li className="nav-item mx-3">
              <span className="nav-link">Resume</span> {/* Find a way to maybe have resume pop up as a pdf. */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;