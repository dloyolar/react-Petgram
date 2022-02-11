import React from 'react';

import { MainRoutes } from './routes/index';
import { GlobalStyle } from './styles/GlobalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainRoutes />
    </>
  );
};
