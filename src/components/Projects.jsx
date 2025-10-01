import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import { projects } from "../constants";
import { useToggle } from "../ToggleContext";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const Card = ({ project, isToggled, index }) => {
  const { img, title, description, link } = project;

  return (
    <motion.article
      className={`${
        isToggled ? "bg-white" : "bg-gray-800"
      } rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUp}
      custom={index}
    >
      <div className="relative overflow-hidden">
        <img
          src={img || "/default-placeholder.png"}
          alt={title ? `${title} project preview` : "Project preview"}
          className="w-full h-52 object-cover object-top transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3
          className={`text-xl font-semibold mb-2 ${
            isToggled ? "text-gray-800" : "text-gray-200"
          }`}
        >
          {title}
        </h3>
        {description && (
          <p
            className={`${
              isToggled ? "text-gray-600" : "text-gray-400"
            } text-sm leading-relaxed`}
          >
            {description}
          </p>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View project: ${title}`}
            className={`inline-block mt-4 ${
              isToggled
                ? "text-blue-600 hover:text-blue-800"
                : "text-blue-400 hover:text-blue-300"
            } font-medium text-sm transition-colors duration-200`}
          >
            View Project →
          </a>
        )}
      </div>
    </motion.article>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  isToggled: PropTypes.bool.isRequired,
  index: PropTypes.number,
};

const Project = () => {
  const { isToggled } = useToggle();

  return (
    <Section
      className="w-full py-20 flex justify-center items-center"
      id="projects"
    >
      <div className="max-w-6xl w-full mx-auto px-4">
        {/* Header */}
        <motion.header
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <motion.h2
            className={`text-4xl font-bold ${
              isToggled ? "text-gray-800" : "text-white"
            } mb-4`}
            variants={fadeUp}
            custom={0}
          >
            My Projects
          </motion.h2>
          <motion.p
            className={`${
              isToggled ? "text-gray-600" : "text-gray-300"
            } max-w-2xl mx-auto`}
            variants={fadeUp}
            custom={1}
          >
            Explore some of my recent work and creative endeavors
          </motion.p>
        </motion.header>

        {/* Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={project.id}
                project={project}
                isToggled={isToggled}
                index={2 + idx}
              />
            ))}
          </div>
        ) : (
          <div className="col-span-full bg-red-200 p-4 rounded-lg ">
            <p
              className={"text-center text-lg font-medium text-gray-800"}
            > 
              No projects available at the moment.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Project;
