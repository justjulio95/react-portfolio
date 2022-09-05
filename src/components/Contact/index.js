import React from "react";
import { Button } from 'react-bootstrap'
import { useForm, ValidationError } from "@formspree/react";
import './index.css'

function ContactForm() {
  const [state, handleSubmit] = useForm('mvoyzkva');
  if (state.succeeded) {
    return <h3>Thanks for the email. I'll be sure to get to you as soon as I see it!</h3>
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Send Me A Message</legend>
        <div className="form-group my-form">
          <label htmlFor="name" className="form-label mt-4 label">Name: </label>
          <input type="text" className="form-control user-input" id="name" aria-describedby="nameHelp" placeholder="Your Name"/>
        </div>
        <div className="form-group my-form">
          <label htmlFor="email" className="form-label mt-4 label">Email: </label>
          <input type="email" className="form-control user-input" id="email" aria-describedby="emailHelp" placeholder="Enter Your Email"/>
          <small id="emailHelp" className="form-text text-muted">Don't worry. Your email is safe with me.</small>
          <ValidationError prefix="Email" field="email" errors={state.errors}/>
        </div>
        <div class="form-group my-form">
          <label htmlFor="message" class="form-label mt-4 label">Message: </label>
          <textarea class="form-control user-input mb-4" id="message" rows="3"></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors}/>
        </div>
      </fieldset>
      <Button type="submit" disabled={state.submitting}>Submit</Button>
    </form>
  )
}

export default ContactForm;