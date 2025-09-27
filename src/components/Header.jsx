import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import { Menu } from "lucide-react";

const Header = () => {
    const location = useLocation();

  return (
    <div className="rounded-full mt-2 px-4 h-10 w-full flex items-center justify-between bg-[rgba(255,255,255,0.2)] backdrop-blur-sm text-gray-900 shadow-md lg:px-20 lg:py-4 lg:h-14">
      <a className="text-[1.3rem] font-bold font-serif">Leonix</a>
      <div className="hidden items-center gap-6 lg:gap-12 lg:flex ">
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
      <Button link={"google.com"} className="w-auto lg:block">
        <span className="lg:block hidden w-32">Hire-Me</span>
        <Menu className="lg:hidden" />
      </Button>

    </div>
  );
};

export default Header;
