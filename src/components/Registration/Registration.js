import React from 'react';
import { Link } from 'react-router-dom';
import '../Registration/Registration.css';
import logo from '../../images/logo.svg';
import { useFormValidation } from '../../hooks/useForm';
import styleForInputError from '../../helpers/helpers';


function Registration({ handleSubmitRegistration, serverResponse }) {
  const { values, errors, isValid, handleChange, resetForm} = useFormValidation();

  function handleSubmitReg(e) {
    e.preventDefault();
    handleSubmitRegistration(values);
    resetForm();
  }

  return (
      <div className='registration'>
        <Link className='registration__home' to='/'>
          <img className='registration__logo' src={ logo } alt='Лого' />
        </Link>
        <h1 className='registration__form-title'>Добро пожаловать!</h1>
        <form onSubmit={ handleSubmitReg } name='registration' className='registration__form' noValidate>

          <div className='registration__wrapper-input'>
            <label className='registration__form-label' htmlFor='name'>Имя</label>
              <input type='text' id='name' name='name' value={ values.name || '' } className={ styleForInputError(errors, 'registration', 'name') } placeholder='Имя'
                onChange={ handleChange } required minLength='3' pattern='^([A-ZА-Я]{1})[a-zа-я_-]{1,16}$'
              />
              <span className={ `${errors.name && 'registration__error'}` }>{ errors.name }</span>

              <label className='registration__form-label' htmlFor='email'>E-mail</label>
              <input type='email' name='email' value={ values.email || '' } id='email' className={ styleForInputError(errors, 'registration', 'email') } placeholder='E-mail'
                onChange={ handleChange } required
              />
              <span className={ `${errors.email && 'registration__error'}` }>{ errors.email }</span>

              <label className='registration__form-label' htmlFor='password'>Пароль</label>
              <input type='password' name='password' value={ values.password || '' } id='password' className={ styleForInputError(errors, 'registration', 'password') } placeholder='Пароль'
                onChange={ handleChange } required minLength='3'
              />
              <span className={ `${errors.password && 'registration__error'}` }>{ errors.password }</span>
          </div>

            <div className='registration__wrapper-button'>
              <p className={ serverResponse && 'registration__response-message' }>{ serverResponse }</p>
              <button type='submit' className={ !isValid ? 'registration__form-button registration__form-button-disabled' : 'registration__form-button' } disabled={ !isValid } >Зарегистрироваться</button>
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
