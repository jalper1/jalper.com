import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./contactPage.css";
import Footer from "../Footer/Footer";

function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [visible, setVisible] = useState(true);

  function addToSubject() {
    setSubject("New Contact Form from " + name);
  }

  useEffect(() => {
    window.innerWidth <= 600 ? setVisible(false) : setVisible(true);
  }, [window]);

  return (
    <>
      <NavBar />
      <div className="contact-container">
        <div className="contact-text">
          <h1>Contact Me!</h1>
          <p>Email: jordanalper22@gmail.com</p>
          <p>
            I'm always open to new ideas or just to chat. Feel free to reach out
            with anything!
          </p>
        </div>
        {visible ? (
          <form
            className="email-form"
            action="mailto:jordanalper22@gmail.com"
            method="get"
            encType="text/plain"
          >
            <label className="label-email">Name:</label>
            <input
              hidden={true}
              type="text"
              name="subject"
              className="email-email"
              placeholder="Email"
              value={subject}
              readOnly
            ></input>
            <input
              className="email-email"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label className="label-email">Email:</label>
            <input
              type="email"
              name="email"
              className="email-email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label className="label-body">Message:</label>
            <textarea
              name="body"
              className="email-body"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="email-submit-container">
              <input
                className="email-submit"
                type="submit"
                value="Send Email"
                onClick={addToSubject}
              />
            </div>
          </form>
        ) : (
          <form
            className="email-form"
            action="mailto:jordanalper22@gmail.com"
            method="get"
            encType="text/plain"
          >
            <div className="email-submit-container">
              <input
                className="email-submit"
                type="submit"
                value="Send Email"
                onClick={addToSubject}
              />
            </div>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
