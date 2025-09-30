import Section from "./Section";
import Button from "./Button";
import { 
  FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaWhatsapp, FaArrowDown 
} from "react-icons/fa";
import { useToggle } from "../ToggleContext";
import TextType from "./Typed";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const Hero = () => {
  const { isToggled } = useToggle();

  const themeClasses = {
    bg: isToggled ? "hero-light-theme" : "hero-dark-theme",
    textPrimary: isToggled ? "text-gray-800" : "text-gray-200",
    textSecondary: isToggled ? "text-gray-700" : "text-gray-300",
    textMuted: isToggled ? "text-gray-700" : "text-gray-400",
    border: isToggled ? "border-gray-400" : "border-gray-600",
    underline: isToggled ? "decoration-gray-800" : "decoration-gray-200",
    arrow: isToggled ? "text-gray-800 hover:text-gray-600" : "text-gray-200 hover:text-gray-400",
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/yourusername", color: isToggled ? "hover:text-gray-900" : "hover:text-gray-400", label: "GitHub" },
    { icon: FaFacebook, href: "https://facebook.com/yourprofile", color: "hover:text-blue-600", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com/yourprofile", color: "hover:text-pink-600", label: "Instagram" },
    { icon: FaWhatsapp, href: "https://wa.me/yourphonenumber", color: "hover:text-green-600", label: "WhatsApp" },
    { icon: FaEnvelope, href: "mailto:your.email@example.com", color: "hover:text-red-600", label: "Email" },
  ];

  const MotionDiv = motion.div;
  const MotionP = motion.p;
  const MotionA = motion.a;
  const MotionH1 = motion.h1;

  return (
    <Section
      id="home"
      className={`${themeClasses.bg} flex-col lg:flex-row flex w-full min-h-screen bg-cover bg-center bg-no-repeat justify-center items-center gap-4 lg:gap-6 px-4 py-20`}
    >
      {/* Profile Image */}
      <motion.div
        className={`w-64 h-64 lg:w-96 lg:h-[460px] rounded-full lg:rounded-2xl overflow-hidden ${themeClasses.border} border-4 shadow-2xl flex-shrink-0 transition-transform duration-300 hover:scale-105`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeUp}
        custom={0}
      >
        <img
          src="./PIC-profile.jpg"
          alt="Toheeb Adeleke - Software Developer"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Content */}
      <MotionDiv
        className="lg:space-y-6 space-y-2 max-w-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        custom={1}
      >
        {/* Headings */}
        <MotionDiv className="space-y-2" variants={fadeUp} custom={2}>
          <MotionH1
            className={`text-3xl lg:text-5xl text-center lg:text-left font-bold ${themeClasses.textPrimary}`}
            variants={fadeUp}
            custom={3}
          >
            Hi, I am{" "}
            <span className={`underline decoration-4 ${themeClasses.underline}`}>
              Toheeb Adeleke
            </span>
          </MotionH1>

          <motion.div
            className={`text-xl lg:text-3xl text-center lg:text-left font-semibold min-h-[2.5rem] lg:min-h-[3rem] ${themeClasses.textPrimary}`}
            variants={fadeUp}
            custom={4}
          >
            I am a{" "}
            <TextType
              text={[
                "Web Developer",
                "Software Engineer",
                "UI/UX Designer",
                "Freelancer",
                "Tech Enthusiast",
                "Gamer",
              ]}
              typingSpeed={70}
              pauseDuration={1700}
              showCursor
              cursorCharacter="|"
              textColors={["gray"]}
            />
          </motion.div>
        </MotionDiv>

        {/* About */}
        <MotionP
          className={`text-base lg:text-lg text-justify lg:text-left leading-relaxed ${themeClasses.textSecondary}`}
          variants={fadeUp}
          custom={5}
        >
          A passionate software developer with expertise in building scalable,
          efficient applications across the full stack. I thrive on solving
          complex problems through clean, maintainable code and thoughtful
          system architecture. Beyond development, I'm constantly exploring
          emerging technologies, contributing to open-source projects, and
          collaborating with teams to deliver robust solutions.
        </MotionP>

        {/* Buttons + Socials */}
        <MotionDiv
          className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6 pt-4"
          variants={fadeUp}
          custom={6}
        >
          <Button variant="primary" active={isToggled ? "" : "active"}>
            View Resume
          </Button>

          <div className="flex gap-4 items-center">
            {socialLinks.map(({ icon: Icon, href, color, label }, i) => (
              <MotionA
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl ${themeClasses.textPrimary} ${color} transition-all duration-300 transform hover:scale-110`}
                variants={fadeUp}
                custom={7 + i}
              >
                <Icon />
              </MotionA>
            ))}
          </div>
        </MotionDiv>

        {/* CTA */}
        <MotionP
          className={`text-sm lg:text-base ${themeClasses.textMuted} text-center lg:text-left font-medium pt-2`}
          variants={fadeUp}
          custom={8 + socialLinks.length}
        >
          Let's connect and discuss your project!
        </MotionP>
      </MotionDiv>

      {/* Scroll Arrow (mobile only) */}
      <motion.a
        href="#about"
        className={`mt-6 text-4xl ${themeClasses.arrow} animate-bounce lg:hidden transition-colors`}
        aria-label="Scroll to About section"
        variants={fadeUp}
        custom={9 + socialLinks.length}
      >
        <FaArrowDown />
      </motion.a>
    </Section>
  );
};

export default Hero;
