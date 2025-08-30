import React from "react";

const Contact = () => {
  return (
    <div className="flex  justify-center items-center mb-30">
      <div className="container">
        <div>
          <div className="w-[500px] text-center flex-col justify-self-center mt-30 mb-15">
            <h2 className="text-[48px] font-semibold">Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[32px]  w-full h-[] bg-[#F4F6FC] px-20 py-40 mt-15">
            <strong>Name</strong>
            <strong>Email</strong>
            <input
              className="outline-none shadow w-2xs h-15 indent-4"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="outline-none shadow w-2xs h-15 indent-4"
              type="text"
              placeholder="Enter your Emial"
            />
            <strong>Contact</strong>
            <strong>Subject</strong>
            <input
              className="outline-none shadow w-2xs h-15 indent-4"
              type="text"
              placeholder="Provide context"
            />
            <input
              className="outline-none shadow w-2xs h-15 indent-4"
              type="text"
              placeholder="Select Subject"
            />
            <strong>Message</strong>
            <textarea
              className="outline-none shadow indent-4"
              rows="4"
              cols="50"
              placeholder="Write your question here"
            ></textarea>
            <button className="bg-[#282938] border py-4 px-12 rounded-full text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
