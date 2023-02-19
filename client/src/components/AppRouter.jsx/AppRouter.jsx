import React, { useContext } from 'react';
import {
  Route, Routes, Navigate,
} from 'react-router-dom';
import { AuthContext } from '../../Context';
import { privateRoutes, publicRoutes } from '../../Router/routes';
import Loader from '../UI/Loader/Loader';

export default function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  return (
    isAuth
      ? (
        <Routes>
          {/* exact - пропс для того, чтобы роут воспринимал наши адреса,
    как разные, потому что начало одинаковое */}
          {privateRoutes?.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
              exact={route.exact}
            />
          ))}
          <Route path="*" element={<Navigate to="/posts" />} />
        </Routes>
      )
      : (
        <Routes>
          {publicRoutes?.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
              exact={route.exact}
            />
          ))}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )

  );
}
