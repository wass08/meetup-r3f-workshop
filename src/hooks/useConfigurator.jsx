import { createContext, useContext, useState } from "react";

export const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [legs, setLegs] = useState(1);

  return (
    <ConfiguratorContext.Provider value={{ legs, setLegs }}>
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
