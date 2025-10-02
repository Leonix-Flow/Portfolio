import { createContext, useContext, useEffect, useState } from "react";

const ToggleContext = createContext();

export const useToggle = () => useContext(ToggleContext);

export const ToggleProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Try to load from localStorage, fallback to 'system'
    return localStorage.getItem("theme") || "system";
  });

  // Apply theme to root and persist to localStorage
  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (theme) => {
      if (theme === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
      } else if (theme === "light") {
        root.classList.add("light");
        root.classList.remove("dark");
      } else {
        // System preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {
          root.classList.add("dark");
          root.classList.remove("light");
        } else {
          root.classList.add("light");
          root.classList.remove("dark");
        }
      }
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme);

    // Listen to system theme changes when "system" is selected
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      if (theme === "system") applyTheme("system");
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  // Helper: isToggled = true for light, false for dark
  const isToggled = theme === "light" || (theme === "system" && !window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Helper: toggle between light/dark/system
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <ToggleContext.Provider value={{ theme, setTheme, isToggled, toggleTheme }}>
      {children}
    </ToggleContext.Provider>
  );
};
