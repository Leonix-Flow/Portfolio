import React from 'react'
import Section from './Section'
import Carousel from './Carousel '

export default function About() {
  return (
    <Section id="about" className="h-auto w-full flex flex-col justify-center items-center bg-[#6e6e6e] text-gray-800 py-20">
      <div className="lg:max-w-[80%] max-w-[90%] mx-auto p-6 bg-[#e9e9e9] rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="mb-4 text-justify bg-gray-200 p-4 shadow-inner rounded">
          I am a Full-Stack Developer and Software Engineer with a passion for creating modern, user-friendly, and scalable digital solutions. My journey into tech began with curiosity for problem-solving and design, and it has grown into a versatile career where I combine creativity with technology to deliver impactful results.  
        </p>
        <div className="mb-6 flex flex-col justify-between md:flex-row">
          <div className="mb-6 md:mb-0 md:w-1/2 bg-gray-200 p-4 rounded shadow-inner">
            <h2 className="text-2xl font-bold mb-4">My Skills</h2>
            <ul className='list-disc list-inside space-y-1 text-left'> 
              <li>Full-Stack Development (Frontend & Backend)</li>
              <li>Web Development (HTML, CSS, JavaScript, React, Tailwind CSS)</li>
              <li>Mobile App Development (Flutter)</li>
              <li>Backend Setup & API Integration (Node.js, Express, Flask)</li>
              <li>Database Management (SQL, NoSQL basics)</li>
              <li>AI & Machine Learning (YOLO, CNN, ML model integration)</li>
              <li>Game Development (Godot)</li>
              <li>UI/UX Design (Figma, Framer, Adobe XD)</li>
            </ul>
          </div>

          <div style={{ height: 'auto', position: 'relative' }}> <Carousel baseWidth={300} autoplay={true} autoplayDelay={3000} pauseOnHover={true} loop={true} round={false} /> </div>
        </div>

      </div>

    </Section>
  )
}
