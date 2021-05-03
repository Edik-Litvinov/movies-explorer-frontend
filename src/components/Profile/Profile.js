import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {

  return  (
      <div className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>
        <form name='profile' className='profile__form'>
          <div className='profile__wrapper-input'>
          <label className='profile__label'>
              <span>Имя</span>
              <input type='text' className='profile__input' />
            </label>

            <div className='profile__line'></div>

            <label className='profile__label'>
              <span>E-mail</span>
              <input type='email' className='profile__input' />
            </label>
          </div>
            <button type='submit' className='profile__button'>Редактировать</button>
        </form>
        <Link className='profile__exit' to='/signin'>Выйти из аккаунта</Link>
      </div>
  )
}

export default Profile;
