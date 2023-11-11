import React, { useState } from "react";
import { client } from "../client";
import { Toast } from "../components";
import { AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setFormData({ name: "", message: "", email: "" });
        setIsFormSubmitted(true);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="w-full container mx-auto px-5 md:px-0 lg:px-8 py-28">
        <form className="max-w-2xl mx-auto" action="">
          <input
            className="block w-full border-[1px] border-b-0 border-black py-6 px-4 md:px-8 outline-none text-sm font-openSans placeholder:text-black"
            placeholder="Your name *"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
          <input
            className="block w-full border-[1px] border-black py-6 px-4 md:px-8 outline-none text-sm font-openSans placeholder:text-black"
            placeholder="Your email *"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
          <textarea
            className="block w-full resize-none border-[1px] border-t-0 border-black py-6 px-4 md:px-8 outline-none text-sm font-openSans placeholder:text-black"
            value={message}
            name="message"
            onChange={handleChangeInput}
            id="message"
            cols="30"
            rows="10"
            placeholder="Your comment"
          ></textarea>
          <button
            type="button"
            onClick={handleSubmit}
            className="btn relative group hover:text-white block border-[1px] border-black py-4 md:py-5 px-12 outline-none text-sm font-openSans mt-6 mx-auto"
          >
            <span className="relative z-30">
              {!loading ? "Send Message" : "Sending..."}
            </span>
          </button>
        </form>
      </div>
      <AnimatePresence>
        {isFormSubmitted && (
          <Toast
            isVisible={isFormSubmitted}
            onClose={() => setIsFormSubmitted(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
