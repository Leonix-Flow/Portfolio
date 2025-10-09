import { useState, useEffect, useRef, } from "react";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";
import { useToggle } from "../ToggleContext";
import Button from "./Button";

const Header = () => {
  const { isToggled } = useToggle();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [activeHash, setActiveHash] = useState(window.location.hash);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && 
          toggleButtonRef.current && !toggleButtonRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    toggleButtonRef.current?.focus();
  };

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const isActive = (href) => activeHash === href;

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-2 lg:px-20">
      <div
        className={`rounded-full px-6 h-10 w-full flex items-center justify-between 
        bg-[rgba(255,255,255,0.2)] backdrop-blur-sm shadow-md lg:py-4 lg:h-14 
        transition-all duration-500 ${atTop ? "mt-1" : "mt-2"}`}
      >
        {/* Logo */}
        <a
          href="/"
          className="text-[1.5rem] font-bold grenze-gotisch block tracking-wide hover:opacity-80 transition-opacity"
        >
          Leonix
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-bold text-[1rem] lg:text-[1.1rem]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`hover:text-gray-400 ${
                link.onlyMobile ? "lg:hidden" : ""
              } ${isActive(link.href) ? "text-gray-500" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Desktop Button */}
          <Button
            link="#Contact"
            variant="ghost"
            className="hidden lg:block w-auto"
            active={isToggled ? "" : "active"}
          >
            <span className="w-32">Contact Me</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            ref={toggleButtonRef}
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-[rgba(255,255,255,0.3)] rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden mt-2 rounded-2xl bg-[rgba(255,255,255,0.2)] backdrop-blur-sm shadow-md p-4 animate-fadeIn"
        >
          <nav className="flex flex-col gap-3 font-bold text-[1rem]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                className={`hover:text-gray-400 py-2 px-2 rounded-lg hover:bg-[rgba(255,255,255,0.2)] ${
                  isActive(link.href) ? "text-gray-500" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#Contact"
              onClick={closeMenu}
              className={`hover:text-gray-400 py-2 px-2 rounded-lg hover:bg-[rgba(255,255,255,0.2)] ${
                isActive("#Contact") ? "text-gray-500" : ""
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