import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Detail } from '../pages/Detail';
import { Home } from '../pages/Home';

import { Layout } from '../Layout/Layout';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
