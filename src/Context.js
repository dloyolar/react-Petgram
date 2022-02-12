import React, { createContext, useState } from 'react';
import { useApolloClient } from '@apollo/client';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const client = useApolloClient();

  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });

  const user = { isAuth };

  const activateAuth = (token) => {
    window.sessionStorage.setItem('token', token);
    setIsAuth(true);
    client.resetStore();
  };

  const removeAuth = () => {
    sessionStorage.removeItem('token');
    setIsAuth(false);
    client.resetStore();
  };

  return (
    <AppContext.Provider value={{ user, activateAuth, removeAuth }}>
      {children}
    </AppContext.Provider>
  );
};
