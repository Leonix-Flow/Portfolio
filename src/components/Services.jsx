import React from "react";
import Section from "./Section";
import { useToggle } from "../ToggleContext";
import { motion } from "framer-motion";
import { services } from "../constants";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const ServiceCard = ({ icon: Icon, title, description, features, index, isToggled }) => (
  <div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeUp}
    custom={index}
    className={`p-6 text-left rounded-xl border transition-colors duration-300 ${
      isToggled
        ? "bg-white border-gray-200 hover:border-gray-300"
        : "bg-gray-900 border-gray-700 hover:border-gray-600"
    }`}
  >
    <div
      className={`mb-4 inline-flex p-3 rounded-lg ${
        isToggled ? "bg-gray-100" : "bg-gray-800"
      }`}
    >
      <Icon
        size={28}
        className={isToggled ? "text-gray-800" : "text-gray-200"}
      />
    </div>
    <h3
      className={`text-lg font-semibold mb-2 ${
        isToggled ? "text-gray-900" : "text-gray-100"
      }`}
    >
      {title}
    </h3>
    <p
      className={`text-sm mb-4 leading-relaxed ${
        isToggled ? "text-gray-700" : "text-gray-400"
      }`}
    >
      {description}
    </p>
    <ul className="space-y-1 text-sm">
      {features.map((feature, idx) => (
        <li
          key={idx}
          className={`flex items-center ${
            isToggled ? "text-gray-600" : "text-gray-400"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full mr-2 ${
              isToggled ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const { isToggled } = useToggle();

  return (
    <Section id="services" className="py-20">
      <div className="max-w-6xl text-center mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isToggled ? "text-gray-900" : "text-white"
            }`}
          >
            What I Offer
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className={`text-base md:text-lg ${
              isToggled ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Services that combine creativity, functionality, and performance to bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.length > 0 ? (
            services.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index + 2}
                isToggled={isToggled}
              />
            ))
          ) : (
            <div className="col-span-full bg-red-200 p-4 rounded-lg ">
              <p
                className={"col-span-full text-lg font-medium text-gray-800"}
              >
                No services available at the moment.
              </p>
            </div>
          )}
        </div>


        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          custom={services.length + 2}
          className="text-center mt-16"
        >
          <p
            className={`text-base md:text-lg mb-4 ${
              isToggled ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Have something in mind? Let's create something great together.
          </p>
          <a
            href="#contact"
            className={`inline-block px-6 py-2.5 rounded-md font-medium transition-all duration-300 hover:scale-105 shadow-md ${
              isToggled
                ? "bg-gray-800 text-white hover:bg-gray-900"
                : "bg-gray-700 text-gray-100 hover:bg-gray-600"
            }`}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Services;
