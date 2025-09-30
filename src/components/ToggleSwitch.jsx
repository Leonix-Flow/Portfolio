import { useToggle } from "../ToggleContext";
import { Sun, Moon } from "lucide-react";

const ToggleSwitch = () => {
  const { isToggled, setIsToggled } = useToggle();

  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Hidden checkbox */}
      <input
        type="checkbox"
        checked={isToggled}
        onChange={() => setIsToggled(!isToggled)}
        style={{ display: "none" }}
      />

      {/* Toggle Track */}
      <span
        style={{
          width: "40px",
          height: "20px",
          background: "var(--color-gray-700)",
          borderRadius: "20px",
          position: "relative",
          transition: "background 0.2s",
        }}
      >
        {/* Toggle Thumb */}
        <span
          style={{
            position: "absolute",
            left: isToggled ? "22px" : "2px",
            top: "2px",
            width: "16px",
            height: "16px",
            background: "#fff",
            borderRadius: "50%",
            transition: "left 0.2s",
          }}
        />

        {/* Sun Icon (left) */}
        <Sun
          size={12}
          style={{
            position: "absolute",
            top: "4px",
            left: "4px",
            color: isToggled
              ? "var(--color-gray-200)"
              : "var(--color-yellow-500)",
            transition: "color 0.2s",
          }}
        />

        {/* Moon Icon (right) */}
        <Moon
          size={12}
          style={{
            position: "absolute",
            top: "4px",
            right: "4px",
            color: isToggled
              ? "var(--color-yellow-500)"
              : "var(--color-gray-200)",
            transition: "color 0.2s",
          }}
        />
      </span>
    </label>
  );
};

export default ToggleSwitch;
