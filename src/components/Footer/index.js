import React from "react";
import github from "./github.svg";
import linkedin from "./linkedin.svg"
import stackoverflow from "./stackover.svg"

function Footer() {
  return (
    <div>
    <footer className="d-flex justify-content-center">
      <a href="https://github.com/justjulio95">
        <img className="mx-3" src={github} alt="github icon"></img>
      </a>
      <a href="https://www.linkedin.com/in/julio-suarez95/">
        <img className="mx-3" src={linkedin} alt="linkedin icon"></img>
      </a>
      <a href="https://stackoverflow.com/users/18031348/justjulio95">
        <img className="mx-3" src={stackoverflow} alt="stackoverflow icon"></img>
      </a>
    </footer>
    </div>
  )
}

export default Footer