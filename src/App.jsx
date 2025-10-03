import { lazy, Suspense } from 'react';
import { ToggleProvider, useToggle } from "./ToggleContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ToggleSwitch from "./components/ToggleSwitch";
import "./index.css";

// Lazy load heavier components
const Project = lazy(() => import("./components/Projects"));
const ContactMe = lazy(() => import("./components/Contact-me"));
const Service = lazy(() => import("./components/Services"));

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
      <div className="fixed w-screen px-4 z-20">
        <Header />
      </div>
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-30">
        <ToggleSwitch />
      </div>
      <main>
        <Hero />
        <About />
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