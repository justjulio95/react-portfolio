import React from "react";
import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect"
import './index.css'

function Header() {
  return (
    <div className="intro-text">
      <Typewriter
        options={{
          strings: ['Oh hey!', 'Welcome to my portfolio', "I'm a Full Stack Web Developer", "Everything you need to know about me is right up here ⬆️"],
          delay: 'natural',
          deleteSpeed: 'natural',
          autoStart: true,
          loop: true
        }}
      />
    </div>
  )
}

export default Header;