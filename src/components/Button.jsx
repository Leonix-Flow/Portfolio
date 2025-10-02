const Button = ({
  onClick,
  className = "",
  variant = "primary",
  children,
  link,
  active,
  disabled = false,
  type = "button",
}) => {
  const variants = {
    primary: "bg-[rgba(255,255,255,0.2)] transition-colors backdrop-blur-sm hover:bg-gray-200 text-gray-900",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "bg-transparent transition-colors duration-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500",
  };

  if (active) {
    variants.primary = "bg-gray-200 transition-colors text-gray-900 hover:bg-gray-400";
    variants.secondary = "bg-gray-600 text-white hover:bg-gray-700";
    variants.success = "bg-green-600 text-white hover:bg-green-700";
    variants.danger = "bg-red-600 text-white hover:bg-red-700";
    variants.ghost = "bg-transparent border border-gray-400 hover:bg-gray-400 dark:border-gray-500 dark:text-gray-100 dark:hover:bg-gray-500";
  }
  
  const baseClasses = `font-bold py-1 px-2 rounded-full ${variants[variant]} ${className}`;
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  // If link is provided, render as anchor tag
  if (link) {
    return (
      <a 
        href={link}
        className={`inline-block ${disabledClasses}`}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        <span className={baseClasses}>
          {children}
        </span>
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={`${baseClasses} ${disabledClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
