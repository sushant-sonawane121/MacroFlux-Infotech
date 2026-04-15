import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Header */}
      <div className="bg-linear-to-r from-slate-800 to-slate-900 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl text-gray-200">
            Have questions about our IT courses? We're here to help!
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-3 text-white mr-4">
                <FaPhone size={24} />
              </div>
              <h3 className="text-xl font-bold">Phone</h3>
            </div>
            <p className="text-gray-600">+91 7350940269</p>
            {/* <p className="text-gray-600">+91 9123456789</p> */}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 rounded-full p-3 text-white mr-4">
                <FaEnvelope size={24} />
              </div>
              <h3 className="text-xl font-bold">Email</h3>
            </div>
            <p className="text-gray-600">macrofluxinfotech@gmail.com</p>
            {/* <p className="text-gray-600">support@macroflux.com</p> */}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 rounded-full p-3 text-white mr-4">
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className="text-xl font-bold">Address</h3>
            </div>
            <p className="text-gray-600">MacroFlux Infotech Surya Complex B6, Opposite of Orange Corner, Pune-Nashik Highway</p>
            <p className="text-gray-600">Sangamner, Maharashtra 422605</p>
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 9876543210"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Course Inquiry"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message here..."
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-blue-600 to-red-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-shadow"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span className="text-gray-700">Expert instructors with industry experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span className="text-gray-700">Hands-on projects and real-world applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span className="text-gray-700">Flexible learning schedules</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span className="text-gray-700">Career assistance and job placement support</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span className="text-gray-700">Certification upon course completion</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span className="text-gray-700">Lifetime access to course materials</span>
              </li>
            </ul>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Office Hours</h3>
              <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
