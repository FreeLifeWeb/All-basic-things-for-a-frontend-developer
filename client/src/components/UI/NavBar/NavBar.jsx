import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context';
import MyButton from '../Button/MyButton';

export default function NavBar() {
  const { setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  console.log(localStorage);
  return (
    <div className="navbar">
      <MyButton onClick={() => logout()}>Выйти</MyButton>
      <div className="navbar-list">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
}
