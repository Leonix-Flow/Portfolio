import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data - replace with your actual services data
const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Backend Development", 
    description: "Creating robust server-side applications and APIs",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop"
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user experiences",
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=200&fit=crop"
  }
];

const Section = ({ children, className, id }) => (
  <section className={className} id={id}>
    {children}
  </section>
);

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Section
      className="bg-gradient-to-b from-[#2c3e50] to-[#293746] bg-cover bg-center bg-no-repeat p-4 min-h-screen flex items-center"
      id="about"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-8 border-b border-neutral-200 pb-4 transition-colors duration-300 text-white">
          Skills
        </h2>
        
        <div className="bg-[#202d3a] rounded-lg shadow-2xl p-6 md:p-8 border border-neutral-200 transition-all duration-300">
          {/* Carousel Container */}
          <div className="relative w-full overflow-hidden rounded-lg">
            
            {/* Slides Container */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="w-full flex-shrink-0 relative h-64 md:h-80"
                >
                  {/* Background Image */}
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-transparent rounded-lg"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8 z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-200 max-w-md drop-shadow-md">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index 
                    ? 'bg-white scale-110' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-gray-300 text-sm">
              {currentSlide + 1} of {services.length}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;