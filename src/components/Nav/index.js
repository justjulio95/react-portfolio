import React from "react";

function Nav() {
  return(
    <header className="flex-row px-1">
      <h2 className="mx-5 my-3">
        <a data-testid="home" href="/">
          <span>Julio Suarez</span>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio">
              My Works
            </a>
          </li>
          <li className="mx-2">
            <span>Contact Me</span>
          </li>
          <li className="mx-2">
            <span>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;