import React from "react";
import Section from "./Section";
import { useToggle } from "../ToggleContext";
import { motion } from "framer-motion";
import { services } from "../constants"; // imported from your JSON-mapped file

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

// ✅ Updated ServiceCard
const ServiceCard = ({
  icon: Icon,
  title,
  description,
  whatsapp_link,
  whatsapp_text,
  index,
  isToggled,
}) => (
  <div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeUp}
    custom={index}
    className={`p-6 text-left rounded-xl shadow-xl transition-colors duration-300 bg-white/30 dark:bg-gray-600/30
      backdrop-blur-md`}
  >
    {/* Icon */}
    <div className="mb-4 inline-flex p-3 rounded-lg bg-white/20 dark:bg-gray-600/30">
      {Icon && <Icon size={28} className={isToggled ? "text-gray-900" : "text-gray-200"} />}
    </div>

    {/* Title */}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>

    {/* Description */}
    <p
      className={`text-sm mb-4 leading-relaxed ${
        isToggled ? "text-gray-900" : "text-gray-300"
      }`}
    >
      {description}
    </p>

    {/* WhatsApp Link */}
    {whatsapp_link && (
      <a
        href={whatsapp_link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm font-semibold text-gray-800 hover:text-gray-900 transition"
      >
        {whatsapp_text || "Contact Now"} →
      </a>
    )}
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
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What I Offer
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className={`text-base md:text-lg ${
              isToggled ? "text-gray-800" : "text-gray-300"
            }`}
          >
            A full range of creative and technical services to help you build,
            design, and grow your digital presence.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.length > 0 ? (
            services.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                whatsapp_link={service.whatsapp_link}
                whatsapp_text={service.whatsapp_text}
                index={index + 2}
                isToggled={isToggled}
              />
            ))
          ) : (
            <div className="col-span-full bg-red-200 p-4 rounded-lg">
              <p className="text-lg font-medium text-gray-800">
                No services available at the moment.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </Section>
  );
};

export default Services;
