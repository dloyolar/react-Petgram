import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery';
import { Home } from '../pages/Home';
import { Logo } from '../components/Logo/index';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Logo />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pet/:id" element={<Home />} />
        <Route path="/detail/:id" element={<PhotoCardWithQuery />} />
      </Routes>
    </BrowserRouter>
  );
};
