import React from "react";

function About() {
  return (
    <section className="my-5 mx-5">
      <div className="card border-primary mb-3">
        <div className="card-body">
          <h2 className="card-title">About Me</h2>
          <h5 className="card-text mx-5">I am a Full Stack Web Developer with the goal to make every web interaction a pleasant one.</h5>
          <h5 className="card-text mx-5">I bring unique ideas, determination, and a sense of pragmatism to any project I'm assigned to.</h5>
          <h5 className="card-text mx-5">Whatever ideas you may have brewing, I'm ready to help you bring them to life.</h5>
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
    </section>
  )
}

export default About;