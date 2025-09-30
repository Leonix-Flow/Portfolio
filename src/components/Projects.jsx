import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import { Projects } from "../constants";
import { useToggle } from '../ToggleContext';

const Card = ({ project, isToggled }) => {
  return (
    <div className={`${isToggled ? "bg-white" : "bg-gray-800"} rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl`}>
      <div className="relative overflow-hidden">
        <img
          src={project.img || "/default-placeholder.png"}
          alt={project.title || "Project image"}
          className="w-full h-52 object-cover object-top transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
          {project.title}
        </h3>
        <p className={`${isToggled ? "text-gray-600" : "text-gray-400"} text-sm leading-relaxed`}>
          {project.description}
        </p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View project: ${project.title}`}
            className={`inline-block mt-4 ${isToggled ? "text-blue-600 hover:text-blue-800" : "text-blue-400 hover:text-blue-300"} font-medium text-sm transition-colors duration-200`}
          >
            View Project →
          </a>
        )}
      </div>
    </div>
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
};

const Project = () => {
  const { isToggled } = useToggle();

  return (
    <Section
      className="w-full h-auto py-20 flex justify-center items-center"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${isToggled ? "text-gray-800" : "text-white"} mb-4`}>
            My Projects
          </h2>
          <p className={`${isToggled ? "text-gray-600" : "text-gray-300"} max-w-2xl mx-auto`}>
            Explore some of my recent work and creative endeavors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[86.5%] mx-auto">
          {Projects.map((project) => (
            <Card key={project.id} project={project} isToggled={isToggled} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Project;