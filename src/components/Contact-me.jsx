import React, { useState } from 'react';
import { useToggle } from '../ToggleContext';
import Section from './Section';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

const ContactMe = () => {
  const { isToggled } = useToggle();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 123 456 7890',
      href: 'tel:+2341234567890'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yourusername',
      color: isToggled ? 'hover:text-gray-900' : 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/yourusername',
      color: 'hover:text-sky-500'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with your actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="Contact"
      className="min-h-screen w-full flex flex-col justify-center items-center py-20 px-4"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isToggled ? "bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent" : "bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"}`}>
            Get In Touch
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isToggled ? "text-gray-700" : "text-gray-300"}`}>
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className={`lg:col-span-2 ${isToggled ? "bg-white/80" : "bg-gray-900/80"} backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-xl ${isToggled ? "border border-gray-200" : "border border-gray-700"}`}>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-semibold mb-2 ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 ${isToggled ? "bg-white text-gray-800 border-gray-300" : "bg-gray-800 text-gray-200 border-gray-600"} border rounded-lg focus:ring-2 ${isToggled ? "focus:ring-gray-500" : "focus:ring-gray-400"} focus:border-transparent outline-none transition-all`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-semibold mb-2 ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 ${isToggled ? "bg-white text-gray-800 border-gray-300" : "bg-gray-800 text-gray-200 border-gray-600"} border rounded-lg focus:ring-2 ${isToggled ? "focus:ring-gray-500" : "focus:ring-gray-400"} focus:border-transparent outline-none transition-all`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-semibold mb-2 ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 ${isToggled ? "bg-white text-gray-800 border-gray-300" : "bg-gray-800 text-gray-200 border-gray-600"} border rounded-lg focus:ring-2 ${isToggled ? "focus:ring-gray-500" : "focus:ring-gray-400"} focus:border-transparent outline-none transition-all`}
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-semibold mb-2 ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full px-4 py-3 ${isToggled ? "bg-white text-gray-800 border-gray-300 placeholder:text-gray-500" : "bg-gray-800 text-gray-200 border-gray-600 placeholder:text-gray-400"} border rounded-lg focus:ring-2 ${isToggled ? "focus:ring-gray-500" : "focus:ring-gray-400"} focus:border-transparent outline-none transition-all resize-none`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span className="text-sm font-medium">{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full ${isToggled ? "bg-gray-800 hover:bg-gray-900" : "bg-gray-700 hover:bg-gray-600"} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className={`${isToggled ? "bg-white/80 border-gray-200" : "bg-gray-900 border-gray-700"} backdrop-blur-sm p-6 rounded-2xl shadow-xl border`}>
              <h3 className={`text-xl font-bold ${isToggled ? "text-gray-800" : "text-gray-200"} mb-4`}>Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-10 h-10 ${isToggled ? "bg-gray-100" : "bg-gray-800"} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon size={20} className={`${isToggled ? "text-gray-700" : "text-gray-300"}`} />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${isToggled ? "text-gray-800" : "text-gray-200"}`}>{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className={`text-sm ${isToggled ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-gray-300"} transition-colors`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className={`text-sm ${isToggled ? "text-gray-600" : "text-gray-400"}`}>{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className={`${isToggled ? "bg-white/80 border-gray-200" : "bg-gray-900 border-gray-700"} backdrop-blur-sm p-6 rounded-2xl shadow-xl border`}>
              <h3 className={`text-xl font-bold ${isToggled ? "text-gray-800" : "text-gray-200"} mb-4`}>Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-12 h-12 ${isToggled ? "bg-gray-100 text-gray-700" : "bg-gray-800 text-gray-300"} rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-md`}
                    >
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
              <p className={`text-sm ${isToggled ? "text-gray-600" : "text-gray-400"} mt-4`}>
                Follow me on social media for updates and insights.
              </p>
            </div>

            {/* Availability */}
            <div className={`${isToggled ? "bg-white/80 border-gray-200" : "bg-gray-900 border-gray-700"} backdrop-blur-sm p-6 rounded-2xl shadow-xl border`}>
              <h3 className={`text-xl font-bold mb-2 ${isToggled ? "text-gray-800" : "text-gray-200"}`}>Availability</h3>
              <p className={`${isToggled ? "text-gray-600" : "text-gray-400"} text-sm`}>
                Currently available for freelance projects and collaborations.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className={`text-sm font-medium ${isToggled ? "text-gray-800" : "text-gray-200"}`}>Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;