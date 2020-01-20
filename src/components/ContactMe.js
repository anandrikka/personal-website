import React from "react";
import Section from "./right/section/Section";

function ContactMe() {
  return (
    <Section classes="section-contact gray-bg">
      <Section.Content>
        <div className="col-md-12">
          <div className="feedback-form">
            <h2>Get in touch</h2>
            <form
              id="contactForm"
              target="_blank"
              action="https://formspree.io/appsbyanand@gmail.com"
              method="POST"
            >
              <div className="form-group">
                <label for="InputName">Name</label>
                <input
                  type="text"
                  name="name"
                  required=""
                  className="form-control"
                  id="InputName"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
                <label for="InputEmail">Email address</label>
                <input
                  type="email"
                  name="email"
                  required=""
                  className="form-control"
                  id="InputEmail"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label for="InputSubject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  id="InputSubject"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <label for="message-text" className="control-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  rows="4"
                  required=""
                  name="message"
                  id="message-text"
                  placeholder="Write message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Section.Content>
    </Section>
  );
}

export default ContactMe;
