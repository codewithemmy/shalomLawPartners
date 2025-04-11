import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
  const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID || "";

  const isFormValid = Object.values(formData).every(Boolean);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic email check
    if (!formData.email.includes("@")) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div aria-live="polite">
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">
            There was an error sending your message. Please try again later.
          </div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-gray-700 font-medium mb-2"
        >
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-gray-700 font-medium mb-2"
        >
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !isFormValid}
        className={`w-full bg-navy-blue text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-900 transition ${
          isSubmitting || !isFormValid ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
