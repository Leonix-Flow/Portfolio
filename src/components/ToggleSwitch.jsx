import { useToggle } from "../ToggleContext";
import { Sun, Moon, MonitorSmartphone } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useToggle();

  const options = [
    { value: "light", icon: <Sun size={16} />, label: "Light" },
    { value: "system", icon: <MonitorSmartphone size={16} />, label: "System" },
    { value: "dark", icon: <Moon size={16} />, label: "Dark" },
  ];

  return (
    <div className="flex w-28 h-8 px-1 items-center justify-between rounded-full border border-gray-300 dark:border-gray-600 bg-transparent">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setTheme(opt.value)}
          type="button"
          title={opt.label}
          className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-200
            ${theme === opt.value
              ? "bg-gray-400"
              : "text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
