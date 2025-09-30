import { useToggle } from "../ToggleContext";

const ToggleSwitch = () => {
  const { isToggled, setIsToggled } = useToggle();

  return (
    <label style={{ display: "inline-flex", alignItems: "center", cursor: "pointer" }}>
      <input
        type="checkbox"
        checked={isToggled}
        onChange={() => setIsToggled(!isToggled)}
        style={{ display: "none" }}
      />
      <span
        style={{
          width: "40px",
          height: "20px",
          background: isToggled ? "var(--color-primary)" : "var(--color-gray-500)",
          borderRadius: "20px",
          position: "relative",
          transition: "background 0.2s"
        }}
      >
        <span
          style={{
            position: "absolute",
            left: isToggled ? "22px" : "2px",
            top: "2px",
            width: "16px",
            height: "16px",
            background: "#fff",
            borderRadius: "50%",
            transition: "left 0.2s"
          }}
        />
      </span>
    </label>
  );
};

export default ToggleSwitch;
