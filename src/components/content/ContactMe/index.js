import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Input({ value, label, updateInfo }) {
  return (
    <div className="contact-input-container">
      <div className={`contact-label ${value === '' ? 'contact-label-unfocused' : 'contact-label-focused'}`}>{label}</div>
      <input
        className="contact-input"
        onChange={(e) => updateInfo(label, e.target.value)}
        value={value}
      />
    </div>
  );
}

function ContactMe({ id }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitEmail = async (e) => {
    e.preventDefault();

    const route = encodeURI("/send");
    const response = await fetch(route, {
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

  const updateInfo = (label, newValue) => {
    switch (label) {
      case 'name':
        setName(newValue);
        break;
      case 'email':
        setEmail(newValue);
        break;
      case 'message':
        setMessage(newValue);
        break;
    }
  }

  const inputs = [
    { label: 'name', value: name },
    { label: 'email', value: email },
  ];

  return (
    <div id={id}>
      <div className="contact-container">
        <div className="h3 bold">Contact Me</div>
        <div className="body header-text">making ideas come to life from design to implemention</div>
        <br />
        <form>
          {inputs.map((input) => (
            <Input value={input.value} label={input.label} updateInfo={updateInfo} />
          ))}
          <div className="contact-textarea-container">
            <textarea
              placeholder="Type your message here..."
              className="contact-textarea"
              onChange={(e) => updateInfo('message', e.target.value)}
              value={message}
            />
          </div>
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