import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 p-6">
      {/* Left Side: Google Map */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Find Us</h2>
        <iframe
          className="w-full h-64 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7534.754429259159!2d73.13305123682295!3d19.22238530877278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7944a60c7c6d7%3A0x6228aeba27a865b2!2sVijay%20Nagar%2C%20Kalyan%2C%20Maharashtra%20421306!5e0!3m2!1sen!2sin!4v1724225622375!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        
      </div>

      {/* Right Side: Contact Form */}
      <div className="md:w-1/2 md:pl-6">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6">Get in touch with me!</p>

        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#86C232] text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
