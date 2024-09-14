import React, { createContext, useState, useMemo } from "react";

export const initialState = { theme: "light", data: [] }; 

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};

