"use client";

// ContactForm.jsx

import axios from "axios";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/submitContactForm", formData);

      if (response.status === 201) {
        console.log("Message sent successfully:", response.data);
        // You can add further logic here, such as displaying a success message to the user
      } else {
        console.error("Error sending message:", response.data);
        // You can add further logic here, such as displaying an error message to the user
      }
    } catch (error) {
      console.error("Internal Server Error:", error);
      // You can add further logic here, such as displaying an error message to the user
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blueGray">
      <div className="max-w-md w-full p-8 bg-navy rounded-md shadow-lg mr-20">
        <h1 className="text-3xl font-bold mb-6 text-gray-300">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full bg-blueGray text-gray-300"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full bg-blueGray text-gray-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Message:
            </label>
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full bg-blueGray text-gray-300 resize-none"
              placeholder="Enter your message"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-maroon text-white rounded-md hover:bg-maroon focus:outline-none focus:border-maroon focus:ring focus:ring-darkRed"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
