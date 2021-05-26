import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';
import { useFormValidation } from '../../hooks/useForm';
import  styleForInputError from '../../helpers/helpers';


function Login({ handleSubmitLogin, serverResponse }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitLogin(values);
    resetForm();
  }

  return (
    <div className='login'>
      <Link className='login__home' to='/'>
        <img className='login__logo' src={ logo } alt='Лого' />
      </Link>
      <h1 className='login__form-title'>Рады видеть!</h1>
      <form name='login' className='login__form' onSubmit={ handleSubmit } noValidate>
        <div className='login__wrapper-input'>
          <label className='login__form-label' htmlFor='email'>E-mail</label>
          <input type='email' name='email' id='email' className={ styleForInputError(errors, 'login', 'email') } placeholder='E-mail'
            value={ values.email || '' } onChange={ handleChange } required/>

          <span className={ `${errors.email && 'login__error'}` }>{ errors.email }</span>

          <label className='login__form-label' htmlFor='password'>Пароль</label>
          <input type='password' name='password' id='password' className={ styleForInputError(errors, 'login', 'password') } placeholder='Пароль'
            value={ values.password || '' } onChange={ handleChange } required minLength='3'/>

          <span className={ `${errors.password && 'login__error'}` }>{ errors.password }</span>
        </div>

        <div className='login__wrapper-button'>
        <p className={ serverResponse && 'login__response-message' }>{ serverResponse }</p>
          <button type='submit' className={ !isValid ? 'login__form-button login__form-button-disabled' : 'login__form-button' }
            disabled={ !isValid }>Войти
          </button>
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
