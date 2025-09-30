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
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`rounded-full px-4 h-10 w-full flex items-center justify-between bg-[rgba(255,255,255,0.2)] backdrop-blur-sm shadow-md lg:px-20 lg:py-4 lg:h-14 transition-all duration-500 ${
          atTop ? "mt-1" : "mt-2"
        }`}
      >
        <a href="/" className="text-[1.3rem] font-bold font-serif">
          Leonix
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:gap-12 lg:flex">
          <nav className="flex gap-4 font-bold text-[1rem] lg:gap-8 lg:text-[1.1rem]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`hover:text-gray-400 transition-colors duration-300 ${
                  link.onlyMobile ? "lg:hidden" : ""
                } ${
                  location.hash === link.href ? "text-gray-400" : ""
                } lg:leading-5`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Desktop Hire Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <Button link={"#Contact"} vari className="w-auto hidden lg:block">
            <span className="w-32">Contact-Me</span>
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-[rgba(255,255,255,0.3)] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 rounded-2xl bg-[rgba(255,255,255,0.2)] backdrop-blur-sm shadow-md p-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-bold text-[1rem] hover:text-gray-400 transition-colors duration-300 py-2 ${
                  location.hash === link.href ? "text-gray-400" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={"#Contact"}
              className={`font-bold text-[1rem] hover:text-gray-400 transition-colors duration-300 py-2 ${
                location.hash === "#Contact" ? "text-gray-400" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact-Me
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;