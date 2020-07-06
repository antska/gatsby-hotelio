import React, { useState } from 'react';
import { navigate } from 'gatsby';

const Form = () => {
  const [state, setState] = useState({});

  const encode = data =>
    Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    const form = e.target;

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state
        })
      });
      navigate('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form
      className="w-full max-w-lg"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <div className="flex flex-col border-b-2 border-helens-blue py-4">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
          Full Name
        </label>
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-400"
          type="text"
          id="name"
          name="name"
          required
          placeholder="Jane Doe"
          aria-label="Full name"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col border-b-2 border-helens-blue py-4">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-400"
          type="email"
          id="email"
          name="email"
          required
          placeholder="jane_doe@gmail.com"
          aria-label="Email"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col border-b-2 border-helens-blue py-4">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
          Your Message
        </label>
        <textarea
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-400"
          required
          id="message"
          name="message"
          rows={4}
          placeholder="Message"
          aria-label="Message"
          onChange={handleChange}
        />
      </div>
      <div className="md:flex md:items-center my-6">
        <label className="block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox" required name="checkbox" onChange={handleChange} />
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
};

export default Form;
