import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import image from '../assets/Library.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://bookstore1-5p5m.vercel.app/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        alert('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert('Error sending message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-6 py-16 flex items-end min-h-screen">
        <div className="bg-white bg-opacity-0 p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 mb-10 mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-blue-500">Contact Us</h1>
          <p className="text-lg text-white mb-4">
            Have questions or feedback? Contact us using the form below or visit us at our store.
          </p>
          <form className="mb-6" onSubmit={handleSubmit}>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            <label className="block text-white text-sm font-bold mt-4 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            <label className="block text-white text-sm font-bold mt-4 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
            ></textarea>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
              Submit
            </button>
          </form>
          <p className="text-lg text-white mb-4">
            Visit us at: 505 Bookstore Street, Pune - 411027.
          </p>
          <Link to="/" className="text-white hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
