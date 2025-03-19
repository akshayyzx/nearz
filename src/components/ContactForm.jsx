import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const form = new FormData();
    form.append("access_key", "82589e7e-049f-40e6-8415-3dd8a3740103");
    form.append("name", formData.name);
    form.append("subject", formData.subject); // ✅ Added Subject Field
    form.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await response.json();
    setIsSending(false);

    if (result.success) {
      setStatus("Sent! Your message has been delivered.");
      setFormData({ name: "", subject: "", message: "" });
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Contact Info */}
      <h2 className="text-lg md:text-xl font-semibold text-center flex items-center gap-2">
        <FaPhoneAlt className="text-gray-700" /> 
        <a href="tel:+919220794223" className="font-bold text-[#F25435]">
          +91 9220794223
        </a>
      </h2>

      <h2 className="text-lg md:text-xl font-semibold text-center flex items-center gap-2 mt-2">
        <FaEnvelope className="text-gray-700" />
        <a href="mailto:support@nearz.in" className="font-bold text-[#F25435]">
          support@nearz.in
        </a>
      </h2>

      <h2 className="text-xl font-semibold text-center text-gray-700 my-4">
         Pour your heart out
      </h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
  <input
    type="text"
    name="name"
    placeholder="Name"
    required
    value={formData.name}
    onChange={handleChange}
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F25435]"
  />

<input
  type="text"
  name="subject"
  placeholder="Subject"
  required
  value={formData.subject}
  onChange={handleChange}
  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F25435]"
/>

  <textarea
    name="message"
    placeholder="Your Suggestions..."
    required
    value={formData.message}
    onChange={handleChange}
    className="w-full p-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#F25435]"
  />

  {/* ✅ Hidden Input for Subject (Required for Web3Forms) */}
  <input type="hidden" name="subject" value={formData.subject} />

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


      {status && <p className="mt-3 text-center text-green-600">{status}</p>}
    </div>
  );
};

export default ContactForm;
