import Section from "./Section";
import Button from "./Button";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaWhatsapp, FaArrowDown } from "react-icons/fa";
import { useToggle } from "../ToggleContext";
import TextType from "./Typed";

const Hero = () => {
  const { isToggled } = useToggle();
  const socialLinks = [
    { 
      icon: FaGithub, 
      href: "https://github.com/yourusername", 
      color: isToggled ? "hover:text-gray-900" : "hover:text-gray-400", 
      label: "GitHub" 
    },
    { 
      icon: FaFacebook, 
      href: "https://facebook.com/yourprofile", 
      color: "hover:text-blue-600", 
      label: "Facebook" 
    },
    { 
      icon: FaInstagram, 
      href: "https://instagram.com/yourprofile", 
      color: "hover:text-pink-600", 
      label: "Instagram" 
    },
    { 
      icon: FaWhatsapp, 
      href: "https://wa.me/yourphonenumber", 
      color: "hover:text-green-600", 
      label: "WhatsApp" 
    },
    { 
      icon: FaEnvelope, 
      href: "mailto:your.email@example.com", 
      color: "hover:text-red-600", 
      label: "Email" 
    }
  ];

  return (
    <Section
      className={`${isToggled ? "hero-light-theme" : "hero-dark-theme"} flex-col lg:flex-row flex w-full min-h-screen bg-cover bg-center bg-no-repeat justify-center items-center gap-4 lg:gap-6 px-4 py-20`}
      id="home"
    >
      <div className={`w-64 h-64 lg:w-96 lg:h-[460px] lg:rounded-2xl rounded-full overflow-hidden ${isToggled ? "border-gray-400" : "border-gray-600"} border-4 shadow-2xl flex-shrink-0 transition-transform duration-300 hover:scale-105`}>
        <img
          className="w-full h-full object-cover"
          src="./PIC-profile.jpg"
          alt="Toheeb Adeleke - Software Developer"
        />
      </div>

      <div className="lg:space-y-6 space-y-2 max-w-2xl">
        <div className="space-y-2">
          <h1 className={`text-3xl lg:text-5xl text-center lg:text-left font-bold ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
            Hi, I am <span className={`underline decoration-4 ${isToggled ? "decoration-gray-800" : "decoration-gray-200"}`}>Toheeb Adeleke</span>
          </h1>
          <div className={`text-xl lg:text-3xl text-center lg:text-left font-semibold min-h-[2.5rem] lg:min-h-[3rem] ${isToggled ? "text-gray-800" : "text-gray-200"}`}>
            I am a <TextType 
              text={["Web Developer", "Software Engineer", "UI/UX Designer", "Freelancer", "Tech Enthusiast", "Gamer"]}
              typingSpeed={70}
              pauseDuration={1700}
              showCursor={true}
              cursorCharacter="|"
              textColors={['gray']}
            />
          </div>
        </div>

        <p className={`text-base lg:text-lg text-justify lg:text-left leading-relaxed ${isToggled ? "text-gray-700" : "text-gray-300"}`}>
          A passionate software developer with expertise in building scalable, efficient applications across the full stack. I thrive on solving complex problems through clean, maintainable code and thoughtful system architecture. Beyond development, I'm constantly exploring emerging technologies, contributing to open-source projects, and collaborating with teams to deliver robust solutions. My goal? To create software that not only meets requirements but exceeds expectations in performance, reliability, and user experience!
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6 pt-4">
          <Button variant="primary" active={isToggled ? "" : "active"}>View Resume</Button>

          <div className="flex gap-4 items-center">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a 
                  key={index}
                  href={social.href} 
                  className={`text-3xl ${isToggled ? "text-gray-800" : "text-gray-200"} ${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <p className={`text-sm lg:text-base ${isToggled ? "text-gray-700" : "text-gray-400"} text-center lg:text-left font-medium pt-2`}>
          Let's connect and discuss your project!
        </p>
      </div>

      <a 
        href="#about" 
        className={`mt-6 text-4xl ${isToggled ? "text-gray-800 hover:text-gray-600" : "text-gray-200 hover:text-gray-400"} animate-bounce lg:hidden transition-colors`} 
        aria-label="Scroll to About section"
      >
        <FaArrowDown />
      </a>
    </Section>
  );
};

export default Hero;