import React, { useState, useEffect } from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-2 lg:px-20">
      <div
        className={`rounded-full px-4 h-10 w-full flex items-center justify-between 
        bg-[rgba(255,255,255,0.2)] backdrop-blur-sm shadow-md lg:py-4 lg:h-14 
        transition-all duration-500 ${atTop ? "mt-1" : "mt-2"}`}
      >
        {/* Logo */}
        <a
          href="/"
          className="text-[1.3rem] font-bold font-serif tracking-wide"
        >
          Leonix
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-bold text-[1rem] lg:text-[1.1rem]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`transition-colors duration-300 hover:text-gray-400 ${
                link.onlyMobile ? "lg:hidden" : ""
              } ${location.hash === link.href ? "text-gray-400" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Desktop Button */}
          <Button
            link={"#Contact"}
            vari
            className="hidden lg:block w-auto"
          >
            <span className="w-32">Contact Me</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-[rgba(255,255,255,0.3)] rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 rounded-2xl bg-[rgba(255,255,255,0.2)] backdrop-blur-sm shadow-md p-4 animate-fadeIn">
          <nav className="flex flex-col gap-3 font-bold text-[1rem]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                className={`transition-colors duration-300 hover:text-gray-400 py-2 ${
                  location.hash === link.href ? "text-gray-400" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#Contact"
              onClick={closeMenu}
              className={`transition-colors duration-300 hover:text-gray-400 py-2 ${
                location.hash === "#Contact" ? "text-gray-400" : ""
              }`}
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
