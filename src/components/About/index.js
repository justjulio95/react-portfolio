import React from "react";
import PFP from "../../images/headshot.jpg"

function About() {
  return (
    <section className="my-5 mx-5">
      <div className="card-columns" style={{display: "flex", flexWrap: "wrap"}}>
        <div className="card mb-3" style={{ width: "25%" }}>
          <img className="card-img" src={PFP} alt="Picture of Julio Suarez, developer extraordinaire!"/>
        </div>
        <div className="card text-center border-primary mb-3" style={{ width: "70%" }}>
          <div className="card-body">
            <h2 className="card-title mb-3">About Me</h2>
            <h5>
              Growing up, I don't think I ever knew what I wanted to do. Life carried on and that's when a pandemic hit in 2020 that made seemingly everyone do a bit of self-discovery.
              In October of 2020, after a few months of working from home and a supportive push from my partner, I decided to embark on a journey that would forever change my life and
              took the CS50 course offered through Harvard. That experience laid the foundation for everything else moving forward.
            </h5>
            <h5>
              Fast forward about a year and 6 months and I've earned my certificate in Full-Stack Web Development from the University of Miami Coding Boot Camp where I learned a plethora of
              skills and technologies including JavaScript, React.js, Node.js, and responsive web-design.
            </h5>
            {/* <h5 className="card-text mx-5">I am a Full Stack Web Developer with the goal to make every web interaction a pleasant one.</h5>
            <h5 className="card-text mx-5">I bring unique ideas, determination, and a sense of pragmatism to any project I'm assigned to.</h5>
            <h5 className="card-text mx-5">Whatever ideas you may have brewing, I'm ready to help you bring them to life.</h5> */}
          </div>
        </div>
        <div className="card border-success mb-3">
          <div className="card-body">
            <h2 className="card-title">The Little Things</h2>
            <h5 className="card-text mx-5">I'm from Miami, Florida and looking to move to the northern US.</h5>
            <h5 className="card-text mx-5">I'm an avid gamer, and hope to even have my name in the credits roll of a game someday.</h5>
            <h5 className="card-text mx-5">At any given time, there's a chance I may be overdue for a hike out in nature somewhere.</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;