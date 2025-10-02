import { useState, useEffect } from "react";
import { useToggle } from "../ToggleContext";
import Section from "./Section";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";
import { SiFiverr } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const ContactMe = ({ showForm = false }) => {
  const { isToggled } = useToggle();

  // --- Form State ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    if (status.type === "success") {
      const timer = setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter a valid email address.";
      }
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "idle", message: "" });

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({ type: "error", message: "Please fix the errors below." });
      return;
    }

    setStatus({ type: "loading", message: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again.",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "olusojleo@gmail.com",
      href: "mailto:olusojleo@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 9074155361",
      href: "tel:+2349074155361",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ogun, Nigeria",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Adeleonix",
      color: isToggled ? "hover:text-gray-900" : "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/leonixadeleke",
      color: "hover:text-blue-600",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://web.facebook.com/people/Toheeb-Adeleke/61580642197907/",
      color: "hover:text-blue-600",
    },
    { 
      icon: SiFiverr,
      label: "Fiverr",
      href: "https://www.fiverr.com/olusojileo",
      color: "hover:text-green-600",
    },
  ];

  return (
    <Section
      id="Contact"
      className="min-h-screen w-full flex flex-col justify-center items-center py-20 border-t border-gray-800 px-4"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <motion.h2
            className={`text-4xl lg:text-5xl font-bold mb-4 ${
              isToggled
                ? "bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
            }`}
            variants={fadeUp}
            custom={1}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className={`text-lg max-w-2xl mx-auto ${
              isToggled ? "text-gray-700" : "text-gray-300"
            }`}
            variants={fadeUp}
            custom={2}
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </motion.p>
        </motion.div>

        {/* Responsive Layout: 2-cols if form, 1-col if not */}
        <div className={`grid gap-8 ${showForm ? "lg:grid-cols-3" : "lg:grid-cols-1"}`}>
          {/* Form Column (conditionally shown) */}
          {showForm && (
            <motion.div
              className={`lg:col-span-2 ${
                isToggled ? "bg-white/80 border-gray-200" : "bg-gray-900/80 border-gray-700"
              } backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-xl border`}
              variants={fadeUp}
              custom={3}
            >
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
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
                      className={`w-full px-4 py-3 border rounded-lg outline-none ${isToggled ? "bg-white text-gray-800 border-gray-300" : "bg-gray-800 text-gray-200 border-gray-600"}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
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
                      className={`w-full px-4 py-3 border rounded-lg outline-none ${isToggled ? "bg-white text-gray-800 border-gray-300" : "bg-gray-800 text-gray-200 border-gray-600"}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
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
                    className={`w-full px-4 py-3 border rounded-lg outline-none ${isToggled ? "bg-white text-gray-800 border-gray-300" : "bg-gray-800 text-gray-200 border-gray-600"}`}
                    placeholder="Let's work together"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-semibold mb-2 ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg outline-none resize-none ${isToggled ? "bg-white text-gray-800 border-gray-300" : "bg-gray-800 text-gray-200 border-gray-600"}`}
                    placeholder="Your message..."
                  />
                  {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                </div>
                {/* Status messages */}
                {status.type === "success" && (
                  <p className="text-sm text-green-600 flex items-center gap-2">
                    <CheckCircle size={16} /> {status.message}
                  </p>
                )}
                {status.type === "error" && (
                  <p className="text-sm text-red-500 flex items-center gap-2">
                    <AlertCircle size={16} /> {status.message}
                  </p>
                )}
                <button
                  type="submit"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white transition ${
                    status.type === "loading"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                  disabled={status.type === "loading"}
                >
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          )}

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <motion.div
              className={`${
                isToggled ? "bg-white/80 border-gray-200" : "bg-gray-900 border-gray-700"
              } backdrop-blur-sm p-6 rounded-2xl shadow-xl border`}
              variants={fadeUp}
              custom={4}
            >
              <h3 className={`text-xl font-bold ${isToggled ? "text-gray-800" : "text-gray-200"} mb-4`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      variants={fadeUp}
                      custom={5 + index}
                    >
                      <div className={`w-10 h-10 ${isToggled ? "bg-gray-100" : "bg-gray-800"} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon size={20} className={`${isToggled ? "text-gray-700" : "text-gray-300"}`} />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
                          {info.label}
                        </p>
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
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className={`${isToggled ? "bg-white/80 border-gray-200" : "bg-gray-900 border-gray-700"} backdrop-blur-sm p-6 rounded-2xl shadow-xl border`}
              variants={fadeUp}
              custom={6 + contactInfo.length}
            >
              <h3 className={`text-xl font-bold ${isToggled ? "text-gray-800" : "text-gray-200"} mb-4`}>
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-12 h-12 ${isToggled ? "bg-gray-100 text-gray-700" : "bg-gray-800 text-gray-300"} rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-md`}
                      variants={fadeUp}
                      custom={7 + contactInfo.length + index}
                    >
                      <Icon size={22} />
                    </motion.a>
                  );
                })}
              </div>
              <p className={`text-sm ${isToggled ? "text-gray-600" : "text-gray-400"} mt-4`}>
                Follow me on social media for updates and insights.
              </p>
            </motion.div>

            {/* Availability */}
            <motion.div
              className={`${isToggled ? "bg-white/80 border-gray-200" : "bg-gray-900 border-gray-700"} backdrop-blur-sm p-6 rounded-2xl shadow-xl border`}
              variants={fadeUp}
              custom={8 + contactInfo.length + socialLinks.length}
            >
              <h3 className={`text-xl font-bold mb-2 ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
                Availability
              </h3>
              <p className={`${isToggled ? "text-gray-600" : "text-gray-400"} text-sm`}>
                Currently available for freelance projects and collaborations.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className={`text-sm font-medium ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
                  Open to opportunities
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
