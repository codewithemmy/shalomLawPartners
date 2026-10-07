import { useState } from "react";

export default function Contact() {
  const endpoint = "https://backend.chrisokekesanandco.org/api/v1/contact";

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullname) errors.fullname = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is not valid";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setSubmitMessage("");
    setFormErrors({});

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitStatus("error");
      setSubmitMessage("Please fill in all required fields correctly.");
      return;
    }

    const payload = {
      fullname: formData.fullname,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    setIsSubmitting(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Contact request was not accepted");
      }

      setSubmitStatus("success");
      setSubmitMessage("Thank you. Your message has been received.");
      setFormData({ fullname: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(
        "We could not send your message. Please try again or contact us by phone or email.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <header className="contact-page-header">
        <span className="eyebrow">Start a conversation</span>
        <h1 className="contact-heading">Book an appointment</h1>
        <p>Tell us how we can help. A member of our team will be in touch.</p>
      </header>

      <div className="contact-layout">
        <div className="contact-details">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Have a legal question or need assistance? Our team is ready to help
            you navigate your legal challenges.
          </p>

          {/* Contact Info */}
          <ul className="contact-details-list">
            <div className="flex items-start">
              <div className="text-navy-blue mr-4 mt-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <a href="tel:+2348032012944">0803 201 2944</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-navy-blue mr-4 mt-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <a href="mailto:chris@chrisokekesanandco.org">
                  chris@chrisokekesanandco.org
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-navy-blue mr-4 mt-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Address</h3>
                <span>27/29 King George V Rd, Marina, Lagos.</span>
              </div>
            </div>
          </ul>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Success/Error Message */}
            {submitStatus === "success" && submitMessage && (
              <div className="form-notice" role="status" aria-live="polite">
                {submitMessage}
              </div>
            )}
            {submitStatus === "error" && submitMessage && (
              <div className="form-notice is-error" role="alert">
                {submitMessage}
              </div>
            )}

            {/* Form Fields */}
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue"
              />
              {formErrors.fullname && (
                <p className="text-red-600 text-sm">{formErrors.fullname}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
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
              {formErrors.email && (
                <p className="text-red-600 text-sm">{formErrors.email}</p>
              )}
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
              {formErrors.subject && (
                <p className="text-red-600 text-sm">{formErrors.subject}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message *
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
              {formErrors.message && (
                <p className="text-red-600 text-sm">{formErrors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
