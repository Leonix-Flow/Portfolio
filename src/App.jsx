import { lazy, Suspense } from 'react';
import { ToggleProvider, useToggle } from "./ToggleContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ToggleSwitch from "./components/ToggleSwitch";
import "./index.css";
import LogoLoop from './components/Icon-Scroll';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiC, SiCss3, SiWix, SiPython, SiJavascript, SiBootstrap } from 'react-icons/si';

// Lazy load heavier components
const Project = lazy(() => import("./components/Projects"));
const ContactMe = lazy(() => import("./components/Contact-me"));
const Service = lazy(() => import("./components/Services"));

// Technology logos for the LogoLoop
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiWix />, title: "Wix", href: "https://www.wix.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
];

// Loading fallback component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="relative h-12 w-12">
      <div className="absolute inset-0 animate-spin rounded-full border-b-2 border-gray-600"></div>
      <img
        src="/Icon.svg"
        alt="Loading..."
        className="absolute inset-0 m-auto h-9 w-9 rounded-full bg-gray-800"
      />
    </div>
  </div>
);


const ThemedApp = () => {
  const { isToggled } = useToggle();
  
  return (
    <div className={`scroll-smooth ${isToggled ? "light-theme" : "dark-theme"}`}>
      <div className='flex flex-col justify-center items-center h-[100vh] fixed z-0'><img src="/Logo.png" className='pointer-events-none  z-2 opacity-2 object-cover-screen' /></div>
      <div className="fixed w-screen px-4 z-20">
        <Header />
      </div>
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-30">
        <ToggleSwitch />
      </div>
      <main className='bg-[]'>
        <Hero />
        <About />
        <div style={{ height: '80px', position: 'relative', overflow: 'hidden'}}>
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={50}
            gap={48}
            pauseOnHover
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <Project />
          <Service />
          <ContactMe />
        </Suspense>
      </main>
      <footer className="text-center border-t border-gray-300 dark:border-gray-700 p-4 text-sm ">
        &copy; {new Date().getFullYear()} Leonix. All rights reserved.
      </footer>
    </div>
  );
};

const App = () => (
  <ToggleProvider>
    <ThemedApp />
  </ToggleProvider>
);

export default App;