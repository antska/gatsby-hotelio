import React from 'react';

const Form = () => (
  <form className="w-full max-w-lg" name="contact" method="POST" data-netlify="true">
    <div className="flex flex-col border-b-2 border-helens-blue py-4">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
        Full Name
      </label>
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        id="name"
        required
        placeholder="Jane Doe"
        aria-label="Full name"
      />
    </div>
    <div className="flex flex-col border-b-2 border-helens-blue py-4">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
        Email
      </label>
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="email"
        id="email"
        required
        placeholder="jane_doe@gmail.com"
        aria-label="Email"
      />
    </div>
    <div className="flex flex-col border-b-2 border-helens-blue py-4">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
        Your Message
      </label>
      <textarea
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        id="message"
        rows={4}
        placeholder="Message"
        aria-label="Message"
      />
    </div>
    <div className="md:flex md:items-center my-6">
      <label className="block text-gray-500 font-bold">
        <input className="mr-2 leading-tight" type="checkbox" />
        <span className="text-sm">I consent to Helen's Studios collecting my details through this form.</span>
      </label>
    </div>
    <div className="md:flex md:items-center">
      <button
        className="border border-helens-blue bg-helens-blue hover:bg-gray-900 transition-all duration-500 text-white block text-center py-2 px-4"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
);

export default Form;
