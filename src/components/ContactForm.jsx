import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  // Handles input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const form = new FormData();
    form.append("access_key", "82589e7e-049f-40e6-8415-3dd8a3740103"); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await response.json();
    setIsSending(false);

    if (result.success) {
      setStatus("Sent! Your message has been delivered.");
      setFormData({ name: "", message: "" });
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl md:text-2xl font-semibold  text-center">
        <strong className="text-[#F25435]">Contact</strong> Us
      </h2>
      {/* Call Icon with Number */}
      <a href="tel:+919876543210" className="flex items-center text-lg font-semibold text-[#F25435] mb-4">
        <FaPhone className="mr-2" /> +91 9220794223

      </a>

      <h2 className="text-xl font-semibold mb-4 text-center">Get in Touch</h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F25435]"
        />

        {/* Message Input */}
        <textarea
          name="message"
          placeholder="Say your heart out..."
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#F25435]"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full text-[#F25435] py-3 rounded-lg font-semibold border border-[#F25435] transition duration-300 ${
            isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-[#F25435] hover:text-white"
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Status Message */}
      {status && <p className="mt-3 text-center text-green-600">{status}</p>}
    </div>
  );
};

export default ContactForm;
