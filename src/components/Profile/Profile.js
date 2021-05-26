import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useFormValidation } from '../../hooks/useForm';

function Profile({ signOut, updateUser, serverResponse, updateProfileMessage }) {
  const userData = React.useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, resetForm } = useFormValidation();


  function profileSumbit(e) {
    e.preventDefault();
    updateUser(values);
    resetForm();
  }

  return  (
      <div className='profile'>
      <h1 className='profile__title'>{`Привет, ${userData.name}!`}</h1>
        <form name='profile' className='profile__form' onSubmit={ profileSumbit }>
          <div className='profile__wrapper-input'>
          <label className='profile__label'>
              <span>Имя</span>
              <input type='text' className='profile__input' name='name' onChange={ handleChange || '' }
              placeholder={ userData.name } value={ values.name || '' } required minLength='3'/>
            </label>
            <span className={ `${errors.name && 'profile__error'}` }>{ errors.name }</span>

            <div className='profile__line'></div>

            <label className='profile__label'>
              <span>E-mail</span>
              <input type='email' className='profile__input' name='email' onChange={ handleChange || '' }
              placeholder={ userData.email } value={ values.email || '' } required/>
            </label>
            <span className={ `${errors.email && 'profile__error'}` }>{ errors.email }</span>

          </div>
            <p className={ `${serverResponse ? 'profile__response-message' : updateProfileMessage && 'profile__response-message profile__response-message_green'}` }>
              { updateProfileMessage ? updateProfileMessage : serverResponse }
            </p>
            <button type='submit' disabled={ !isValid } className={ `${ !isValid ? 'profile__button profile__button-disabled' : 'profile__button' }` }>Редактировать</button>
        </form>
        <Link onClick={ signOut } className='profile__exit' to='/signin'>Выйти из аккаунта</Link>
      </div>
  )
}

export default Profile;
