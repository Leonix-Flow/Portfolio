import React from 'react'
import Section from './Section'
import Carousel from './Carousel '
import { useToggle } from '../ToggleContext';

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

  return (
    <Section id="about" className="min-h-screen w-full flex flex-col justify-center items-center py-20">
      <div className={`lg:max-w-[80%] max-w-[90%] mx-auto p-8 ${isToggled ? "bg-white" : "bg-gray-900"} rounded-lg shadow-lg`}>
        <h2 className={`text-4xl font-bold mb-8 text-center ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
          About Me
        </h2>

        <p className={`mb-8 text-justify ${isToggled ? "bg-gray-50 text-gray-800" : "bg-gray-800 text-gray-200"} p-6 shadow-md rounded-lg leading-relaxed`}>
          I am a <span className="font-semibold">Full-Stack Developer</span> and <span className="font-semibold">Software Engineer</span> with a passion for creating modern, user-friendly, and scalable digital solutions. My journey into tech began with curiosity for problem-solving and design, and it has grown into a versatile career where I combine creativity with technology to deliver impactful results.
        </p>
        
        <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:gap-8">
          <div className={`flex-1 ${isToggled ? "bg-gray-50" : "bg-gray-800"} p-6 rounded-lg shadow-md`}>
            <h3 className={`text-2xl font-bold mb-6 ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
              My Skills
            </h3>
            <ul className='space-y-3'> 
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className={`inline-block w-2 h-2 ${isToggled ? "bg-blue-600" : "bg-blue-400"} rounded-full mt-2 flex-shrink-0`}></span>
                  <span className={`${isToggled ? "text-gray-700" : "text-gray-300"}`}>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`lg:w-[400px] w-full flex justify-center items-center ${isToggled ? "bg-gray-50" : "bg-gray-800"} p-4 rounded-lg shadow-md`}>
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
          </div>
        </div>

        <div className={`${isToggled ? "bg-gray-50 text-gray-800" : "bg-gray-800 text-gray-200"} p-6 rounded-lg shadow-md`}>
          <h3 className={`text-2xl font-bold mb-4 ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
            What I Do
          </h3>
          <p className={`${isToggled ? "text-gray-700" : "text-gray-300"} leading-relaxed`}>
            From building responsive web applications to developing mobile apps and implementing AI solutions, I thrive on turning ideas into reality. I believe in writing clean, maintainable code and creating intuitive user experiences that make a difference.
          </p>
        </div>
      </div>
    </Section>
  )
}