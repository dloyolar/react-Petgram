import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });

  const user = { isAuth };

  const activateAuth = (token) => {
    window.sessionStorage.setItem('token', token);
    setIsAuth(true);
  };

  return (
    <AppContext.Provider value={{ user, activateAuth }}>
      {children}
    </AppContext.Provider>
  );
};
