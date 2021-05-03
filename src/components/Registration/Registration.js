import React from 'react';
import { Link } from 'react-router-dom';
import '../Registration/Registration.css';
import logo from '../../images/logo.svg';

function Registration() {

  return (
      <div className='registration'>
        <Link className='registration__home' to='/'>
          <img className='registration__logo' src={ logo } alt='Лого' />
        </Link>
        <h1 className='registration__form-title'>Добро пожаловать!</h1>
        <form name='registration' className='registration__form'>

          <div className='registration__wrapper-input'>
            <label className='registration__form-label' htmlFor='name'>Имя</label>
              <input type='text' id='name' name='name' className='registration__form-input' placeholder='Имя' />

              <label className='registration__form-label' htmlFor='email'>E-mail</label>
              <input type='email' name='email' id='email' className='registration__form-input' placeholder='E-mail' />

              <label className='registration__form-label' htmlFor='password'>Пароль</label>
              <input type='password' name='password' id='password' className='registration__form-input' placeholder='Пароль' />
          </div>

            <div className='registration__wrapper-button'>
              <button type='submit' className='registration__form-button'>Зарегистрироваться</button>
              <div className='registration__text'>
                <p className='registration__subtitle'>Уже зарегистрированы?</p>
                <Link to='/signin' className="registretion__link">Войти</Link>
              </div>
            </div>

        </form>

      </div>
  )
}

export default Registration;
