import { lazy, Suspense } from 'react';
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { ToggleProvider, useToggle } from "./ToggleContext";
import ToggleSwitch from "./components/ToggleSwitch";

// Lazy load heavier components
const Project = lazy(() => import("./components/Projects"));
const ContactMe = lazy(() => import("./components/Contact-me"));

// Loading fallback component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
  </div>
);

const ThemedApp = () => {
  const { isToggled } = useToggle();
  
  return (
    <div className={`scroll-smooth ${isToggled ? "light-theme" : "dark-theme"}`}>
      <div className="fixed w-screen px-4 z-20">
        <Header />
      </div>
      <div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-30">
        <ToggleSwitch />
      </div>
      <main>
        <Hero />
        <About />
        <Suspense fallback={<LoadingSpinner />}>
          <Project />
          <ContactMe />
        </Suspense>
      </main>
      <footer className="text-center border-t border-gray-400 p-4">
        leonix &copy; {new Date().getFullYear()}
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