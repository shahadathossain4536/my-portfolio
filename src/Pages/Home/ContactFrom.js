import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactFrom = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g7rvi7p",
        "template_rnieehg",
        form.current,
        "NoATtRS-qFR8SEahP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="my-20" id="contact-from">
      <h2 className="text-center text-5xl mb-10">Get in Touch</h2>

      <div className="mt-12">
        <div></div>
        <div className="flex justify-center">
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                class="input input-bordered w-full lg:w-96"
              />
            </div>

            <div>
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                class="input input-bordered w-full lg:w-96"
              />
            </div>
            <div>
              <label class="label">
                <span class="label-text">Message</span>
              </label>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                required
                class="textarea input-bordered  w-full lg:w-96 h-40"
              />
            </div>
            <input className="btn w-full lg:w-96 " type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
