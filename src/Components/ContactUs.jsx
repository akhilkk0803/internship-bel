import React, { useState, useEffect } from "react";
import "./ContactUs.css"; // Assuming you place your CSS in this file
function ContactUs() {
  const [text, setText] = useState("");
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [companyName, setCompanyName] = useState(null);

  useEffect(() => {
    typewriter();
  }, []);
  const submithandler = (e) => {
    e.preventDefault();
    if (!name || !email || !companyName) return;
    alert("Successfully Registered");
    setText("");
    setName("");
    setEmail("");
    setCompanyName("");
  };
  const typewriter = () => {
    const txt = "Great together";
    const speed = 100;
    let i = 0;
    const interval = setInterval(() => {
      if (i < txt.length) {
        setText((text) => text + txt.charAt(i++));
      } else {
        clearInterval(interval);
      }
    }, speed);
  };
  return (
    <div className="container">
      <div className="main">
        <p id="one">Let's build something</p>
        <p id="two">{text}</p>
      </div>
      <div className="forms-container">
        <div className="forms">
          <p id="text">Get in touch</p>
          <form onSubmit={submithandler}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
