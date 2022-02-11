import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Detail } from '../pages/Detail';
import { Home } from '../pages/Home';

import { Layout } from '../Layout/Layout';
import { Favs } from '../pages/Favs';
import { User } from '../pages/User';
import { NotRegisteredUser } from '../pages/NotRegisteredUser';
import { AppContext } from '../Context';

export const AppRouter = () => {
  const {
    user: { isAuth },
  } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route
            path="/favs"
            element={isAuth ? <Favs /> : <NotRegisteredUser />}
          />
          <Route
            path="/user"
            element={isAuth ? <User /> : <NotRegisteredUser />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
