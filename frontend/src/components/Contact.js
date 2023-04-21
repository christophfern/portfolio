import React, { useState } from 'react';
import axios from 'axios';
import { ApiEnum } from './enum/ApiEnum';
import { apiUrl } from './config/Config';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState(false);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(apiUrl(ApiEnum.POST_CONTACT_ME), formData);
      if (response.status === 200) {
        setFormSubmitted(true);
        setFormSubmitError(false);
      } else {
        setFormSubmitted(false);
        setFormSubmitError(true);
      }
    } catch (error) {
      console.log(error);
      setFormSubmitted(false);
      setFormSubmitError(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {formSubmitted ? (
        <div className="bg-green-100 text-green-900 px-4 py-2 rounded-md mb-4">
          Thank you for contacting us!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-gray-400 border-2 py-2 px-4 rounded-md focus:outline-none focus:border-primary-500"
              placeholder=""
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-gray-400 border-2 py-2 px-4 rounded-md focus:outline-none focus:border-primary-500"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="^\d{3}[-]?\d{3}[-]?\d{4}$"
                className="w-full border-gray-400 border-2 py-2 px-4 rounded-md focus:outline-none focus:border-primary-500"
                placeholder=""
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
           </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border-gray-400 border-2 py-2 px-4 rounded-md focus:outline-none focus:border-primary-500"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </form>
      )}
      {formSubmitError && (
        <div className="bg-red-100 text-red-900 px-4 py-2 rounded-md mt-4">
          Oops! Something went wrong. Please try again later.
        </div>
      )}
    </div>
  );
}


export default Contact;
