import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers"

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      
      if(!isValid || !e.target.value.length) {
        setErrorMessage('Please type a valid email');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`)
      } else {
        setErrorMessage('')
      }
    }

    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return(
    <section className="mx-5">
      <h1>Contact Me</h1>
      <form className="mx-5" id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group-row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name: </label>
          <div className="col-sm-10">
            <input className="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange}/>
          </div>
        </div>
        <div className="form-group-row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email: </label>
          <div className="col-sm-10">
            <input className="form-control" type="text" name="email" defaultValue={email} onBlur={handleChange}/>
          </div>
        </div>
        <div className="form-group-row">
          <label htmlFor="message" className="col-sm-2 col-form-label">Message: </label>
          <div className="col-sm-10">
            <textarea className="form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange}></textarea>
          </div>
        </div>
        {errorMessage && (
          <div>
            <p className="text-danger">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="btn btn-secondary my-4">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm