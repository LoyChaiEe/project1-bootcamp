// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container } from "react-bootstrap";
function Contact() {
  const [state, handleSubmit] = useForm("meqdlqak");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <Container id="contact">
      <h1>Get in Touch</h1>
      <p className="form-text">
        I’m currently looking for any new opportunities to get more professional
        experience in the software development industry.<br></br> I like to find new
        oppurtunities to improve myself.<br></br> My inbox is always open, so just hit me
        up and say Hello!<br></br>Even if it is not software-related, it is nice to have
        a chat :&#41; <br></br>
        Just leave a message and your email and you are good to go!
      </p>
      <form onSubmit={handleSubmit} id="contact-form">
        <label htmlFor="email">Email Address</label>
        <input id="form-email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="form-message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </Container>
  );
}

export default Contact