import { createContext, useContext, useState } from "react";

export const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [legs, setLegs] = useState(1);
  const [tableWidth, setTableWidth] = useState(1);
  const [legsColor, setLegsColor] = useState("black");

  return (
    <ConfiguratorContext.Provider
      value={{
        legs,
        setLegs,
        tableWidth,
        setTableWidth,
        legsColor,
        setLegsColor,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  const context = useContext(ConfiguratorContext);
  if (context === undefined) {
    throw new Error(
      "useConfigurator must be used within a ConfiguratorProvider"
    );
  }
  return context;
};
