import React, { createContext, useState } from 'react';

const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <ToggleContext.Provider value={{ isToggled, setIsToggled }}>
      {children}
    </ToggleContext.Provider>
  );
};

export { ToggleProvider, ToggleContext };