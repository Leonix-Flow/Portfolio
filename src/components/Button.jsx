import React from "react";

const Button = ({
  onClick,
  className,
  variant = "primary",
  children,
  link,
}) => {
  const variants = {
    primary: " bg-[rgba(255,255,255,0.2)] backdrop-blur-1xl hover:bg-gray-200",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <div>
      <a href={link}>
        <button
          className={`transition-colors duration-700 font-bold py-1 px-2 rounded-full ${variants[variant]} ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      </a>
    </div>
  );
};

export default Button;
