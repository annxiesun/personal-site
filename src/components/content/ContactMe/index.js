import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ContactMe({ id }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitEmail = async (e) => {
    e.preventDefault();

    const response = await fetch("/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "email": email,
        "name": name,
        "message": message,
      },
    })
      .then((res) => { res.json() })
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <div id={id}>
      <div className="contact-container">
        <div className="h3 bold">Contact Me</div>
        <div className="body header-text">making ideas come to life from design to implemention</div>
        <br />
        <form>
          <input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name}
          />
          <input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
          />
          <input
            placeholder="message"
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            value={message}
          />
          <button onClick={submitEmail}>Click me</button>
        </form>
      </div>
    </div>
  );
}

ContactMe.propTypes = {
  id: PropTypes.string.isRequired
}

export default ContactMe;