import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';

function Login() {

  return (
    <div className='login'>
      <Link className='login__home' to='/'>
        <img className='login__logo' src={ logo } alt='Лого' />
      </Link>
      <h1 className='login__form-title'>Рады видеть!</h1>
      <form name='login' className='login__form'>
        <div className='login__wrapper-input'>
          <label className='login__form-label' htmlFor='email'>E-mail</label>
          <input type='email' name='email' id='email' className='login__form-input' placeholder='E-mail' />

          <label className='login__form-label' htmlFor='password'>Пароль</label>
          <input type='password' name='password' id='password' className='login__form-input' placeholder='Пароль' />
        </div>

        <div className='login__wrapper-button'>
          <button type='submit' className='login__form-button'>Войти</button>
            <div className='login__text'>
              <p className='login__subtitle'>Ещё не зарегистрированы?</p>
              <Link to='/signup' className="login__link">Регистрация</Link>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
