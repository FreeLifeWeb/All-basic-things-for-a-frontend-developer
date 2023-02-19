import React, { useContext } from 'react';
import { AuthContext } from '../../Context';
import MyButton from '../UI/Button/MyButton';
import MyInput from '../UI/Input/MyInput';

export default function Login() {
  const { setIsAuth } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={(e) => login(e)}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton onClick={(e) => login(e)}>Войти</MyButton>
      </form>
    </div>
  );
}
