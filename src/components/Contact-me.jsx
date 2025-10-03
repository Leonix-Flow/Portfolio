import { useState, useEffect } from "react";
import { useToggle } from "../ToggleContext";
import Section from "./Section";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
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
      className="min-h-screen w-full flex flex-col justify-center items-center py-20 border-gray-800 px-2"
    >
      <div className="max-w-6xl px-2 w-full mx-auto">
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
                ? "bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
            }`}
            variants={fadeUp}
            custom={1}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className={`text-lg max-w-2xl mx-auto ${
              isToggled ? "text-gray-800" : "text-gray-300"
            }`}
            variants={fadeUp}
            custom={2}
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </motion.p>
        </motion.div>
        <div className={`grid gap-8 lg:grid-cols-1`}>
          <div className="space-y-6">
            
            <motion.div
              className={`backdrop-blur-sm p-6 bg-white/30 dark:bg-gray-600/30 rounded-2xl shadow-xl`}
              variants={fadeUp}
              custom={4}
            >
              <h3 className={`text-xl font-bold mb-4`}>
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
                      <div className={`w-10 h-10 bg-white/30 dark:bg-gray-600/30 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon size={20} className={``} />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${isToggled ? "text-gray-900" : "text-gray-300"}`}>
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className={`text-sm ${isToggled ? "text-gray-900 hover:text-gray-800" : "text-gray-300 hover:text-gray-200"} transition-colors`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className={`text-sm ${isToggled ? "text-gray-900" : "text-gray-300"}`}>{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className={`bg-white/30 dark:bg-gray-600/30 backdrop-blur-sm p-6 rounded-2xl shadow-xl`}
              variants={fadeUp}
              custom={6 + contactInfo.length}
            >
              <h3 className={`text-xl font-bold ${isToggled ? "text-gray-900" : "text-gray-300"} mb-4`}>
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
                      className={`w-12 h-12 bg-white/30 dark:bg-gray-600/30 rounded-lg flex items-center justify-center ${social.color} transition-transform duration-300 hover:scale-110 hover:shadow-md`}
                      variants={fadeUp}
                      custom={7 + contactInfo.length + index}
                    >
                      <Icon size={22} />
                    </motion.a>
                  );
                })}
              </div>
              <p className={`text-sm ${isToggled ? "text-gray-900" : "text-gray-300"} mt-4`}>
                Follow me on social media for updates and insights.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
