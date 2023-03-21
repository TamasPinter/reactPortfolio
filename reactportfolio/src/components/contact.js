import React, { useState } from "react";

function Contact() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const checkBlanks = (e) => {
    if (e.target.value === "") {
      setError(`${e.target.getAttribute("name")} is required`);
    } else {
      setError("");
    }
  };
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  return (
    <div className="contactText">
      <h1>Contact Me</h1>
      <form>
        <p>Enter your name:</p>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onBlur={checkBlanks}
          name="name"
          type="text"
        />
        <p>Enter your email:</p>
        <input
          name="email"
          type="email"
          onBlur={checkBlanks}
          value={email}
          onChange={(e) => {
            if (!validateEmail(e.target.value)) {
              setError("Invalid email");
            } else {
              setError("");
            }
            setEmail(e.target.value);
          }}
        />
        <p>Leave a message:</p>
        <textarea onBlur={checkBlanks} name="message"></textarea>
        <div>{error}</div>
      </form>
    </div>
  );
}

export default Contact;