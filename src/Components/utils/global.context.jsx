import React, { createContext, useState, useMemo, useEffect } from "react";

export const initialState = { theme: "light", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Obtener el tema del localStorage o usar el valor por defecto
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Guardar el tema en el localStorage
      return newTheme;
    });
  };

  const value = useMemo(() => ({
    theme,
    toggleTheme
  }), [theme]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};


