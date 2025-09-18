import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import "./index.css";
import About from "./components/About";
import Slide from "./components/Slide";

const App = () => {
  return (
    <>
      <div className="fixed w-full z-20">
        <Header />
      </div>
      <Hero />
      <About />
      <Section>
        
      </Section>
      


    </>
  );
};

export default App;
