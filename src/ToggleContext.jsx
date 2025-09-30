import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export const useToggle = () => useContext(ToggleContext);

export const ToggleProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <ToggleContext.Provider value={{ isToggled, setIsToggled }}>
      {children}
    </ToggleContext.Provider>
  );
};
