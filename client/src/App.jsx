import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx/AppRouter';
import NavBar from './components/UI/NavBar/NavBar';
import { AuthContext } from './Context';

export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(isAuth);
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
        <BrowserRouter>
          <NavBar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
      ,
    </>
  );
}
