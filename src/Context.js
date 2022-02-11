import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const user = { isAuth };
  const login = () => setIsAuth(true);

  return (
    <AppContext.Provider value={{ user, login }}>
      {children}
    </AppContext.Provider>
  );
};
