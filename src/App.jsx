import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import About from "./components/About";


const App = () => {
  return (
    <>
      <div className="fixed w-screen z-20">
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
