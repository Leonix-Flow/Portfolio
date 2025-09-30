import React from 'react'
import Section from './Section'
import Carousel from './Carousel '
import { useToggle } from '../ToggleContext';
import { motion } from "framer-motion";

export default function About() {
  const { isToggled } = useToggle();
  const skills = [
    "Full-Stack Development (Frontend & Backend)",
    "Web Development (HTML, CSS, JavaScript, React, Tailwind CSS)",
    "Mobile App Development (Flutter)",
    "Backend Setup & API Integration (Node.js, Express, Flask)",
    "Database Management (SQL, NoSQL basics)",
    "AI & Machine Learning (YOLO, CNN, ML model integration)",
    "Game Development (Godot)",
    "UI/UX Design (Figma, Framer, Adobe XD)"
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" }
    })
  };

  return (
    <Section id="about" className="min-h-screen w-full flex flex-col justify-center items-center py-20">
      <motion.div
        className={`lg:max-w-[80%] max-w-[90%] mx-auto p-8 ${isToggled ? "bg-white" : "bg-gray-900"} rounded-lg shadow-lg`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        custom={0}
      >
        <motion.h2
          className={`text-4xl font-bold mb-8 text-center ${isToggled ? "text-gray-800" : "text-gray-200"}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          custom={1}
        >
          About Me
        </motion.h2>

        <motion.p
          className={`mb-8 text-justify ${isToggled ? "bg-gray-50 text-gray-800" : "bg-gray-800 text-gray-200"} p-6 shadow-md rounded-lg leading-relaxed`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          custom={2}
        >
          I am a <span className="font-semibold">Full-Stack Developer</span> and <span className="font-semibold">Software Engineer</span> with a passion for creating modern, user-friendly, and scalable digital solutions. My journey into tech began with curiosity for problem-solving and design, and it has grown into a versatile career where I combine creativity with technology to deliver impactful results.
        </motion.p>
        
        <motion.div
          className="mb-6 flex flex-col gap-6 lg:flex-row lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          custom={3}
        >
          <motion.div
            className={`flex-1 ${isToggled ? "bg-gray-50" : "bg-gray-800"} p-6 rounded-lg shadow-md`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            custom={4}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
              My Skills
            </h3>
            <ul className='space-y-3'> 
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  custom={5 + index}
                >
                  <span className={`inline-block w-2 h-2 ${isToggled ? "bg-blue-600" : "bg-blue-400"} rounded-full mt-2 flex-shrink-0`}></span>
                  <span className={`${isToggled ? "text-gray-700" : "text-gray-300"}`}>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={`lg:w-[400px] w-full flex justify-center items-center ${isToggled ? "bg-gray-50" : "bg-gray-800"} p-4 rounded-lg shadow-md`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            custom={6 + skills.length}
          >
            <div className="w-full h-full max-h-[320px] flex justify-center items-center">
              <Carousel 
                baseWidth={280} 
                autoplay={true} 
                autoplayDelay={3000} 
                pauseOnHover={true} 
                loop={true} 
                round={false} 
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`${isToggled ? "bg-gray-50 text-gray-800" : "bg-gray-800 text-gray-200"} p-6 rounded-lg shadow-md`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          custom={7 + skills.length}
        >
          <h3 className={`text-2xl font-bold mb-4 ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
            What I Do
          </h3>
          <p className={`${isToggled ? "text-gray-700" : "text-gray-300"} leading-relaxed`}>
            From building responsive web applications to developing mobile apps and implementing AI solutions, I thrive on turning ideas into reality. I believe in writing clean, maintainable code and creating intuitive user experiences that make a difference.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  )
}