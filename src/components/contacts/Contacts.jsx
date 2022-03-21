import React from "react";
import { useState } from "react";
import "./contacts.scss";

function Contacts() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(true);
  };

  return (
    <section className="contacts" id="contacts">
      <div className="contacts__content">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Messege"></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>Thank you for your message! I will reply soon.</span>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contacts;
