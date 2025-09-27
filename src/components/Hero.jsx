import Section from "./Section";
import Button from "./Button";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import TextType from "./Typed";

const Hero = () => {
  return (
    <Section
      className="bg-gradient-to-b from-[#e9e9e9] to-[#6e6e6e] flex-col lg:flex-row flex w-full h-auto bg-cover bg-center bg-no-repeat justify-center items-center pt-15 lg:py-20"
      id="home"
    >
      <div className="block w-50 h-50 lg:w-90 lg:h-120 lg:rounded-2xl rounded-full overflow-hidden border-gray-400 border-4">
        <img
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          src="src/assets/PIC-profile.jpg"
          alt=""
        />
      </div>
      <div className="text-black px-10 space-y-2 max-w-2xl">
        <span className="text-[1.5rem] lg:text-[2.5rem] text-center lg:text-left block font-bold">
          Hi, i am <span className="underline">Toheeb Adeleke</span>
        </span>
        <span className="text-[1.2rem] lg:text-[2rem] text-center lg:text-left block font-semibold">
          I am a <TextType text={["Web developer", "Software engineer", "UI/UX designer", "Freelancer", "Tech enthusiast", "Gamer"]}
          typingSpeed={70}
          pauseDuration={1700}
          showCursor={true}
          cursorCharacter="|"
          textColors={['gray']}
        />
        </span>
        <div className="w-auto ">
          <span className="text-lg block text-justify lg:text-left text-clip">
            A passionate frontend developer with a knack for creating beautiful
            and functional web applications. I love bringing designs to life,
            ensuring they are as user-friendly as they are visually stunning.
            Beyond coding, I enjoy exploring new web technologies, contributing to
            open-source projects, and collaborating with like-minded developers.
            My goal? To craft web experiences that not only work seamlessly but
            also leave a lasting impression!
          </span>
        </div>

        <div className="flex justify-between w-auto max-w-sm items-center">
          <Button variant="primary">View Resume</Button>
            <a href="" className="text-3xl text-black"><FaGithub /></a>
            <a href="" className="text-3xl text-blue-500"><FaFacebook /></a>
            <a href="" className="text-3xl text-white"><FaInstagram/></a>
            <a href="" className="text-3xl text-green-500"><FaWhatsapp/></a>
            <a href="" className="text-3xl text-yellow-300"><FaEnvelope/></a>
        </div>

        <div className="text-sm text-gray-800 text-center lg:text-left">
          <span>Let's connect and discuss your project!</span>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
