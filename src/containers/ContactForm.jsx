import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full container mx-auto px-5 md:px-0 lg:px-8 py-28">
      <form className="max-w-2xl mx-auto" action="">
        <input
          className="block w-full border-[1px] border-b-0 border-black py-6 px-4 md:px-8 outline-none text-sm font-openSans placeholder:text-black"
          placeholder="Your name *"
          type="text"
        />
        <input
          className="block w-full border-[1px] border-black py-6 px-4 md:px-8 outline-none text-sm font-openSans placeholder:text-black"
          placeholder="Your email *"
          type="text"
        />
        <textarea
          className="block w-full border-[1px] border-t-0 border-black py-6 px-4 md:px-8 outline-none text-sm font-openSans placeholder:text-black"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your comment"
        ></textarea>
        <button className="btn relative group hover:text-white block border-[1px] border-black py-4 md:py-5 px-12 outline-none text-sm font-openSans mt-6 mx-auto">
          <span className="relative z-30">Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
