import React from 'react';

import { AppRouter } from './routes/AppRouter';
import { GlobalStyle } from './styles/GlobalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};
