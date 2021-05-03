import React from 'react';
import { NavLink } from 'react-router-dom';
import accoutImage from '../../images/account-img.svg';
import './Navigation.css';

function Navigation({ isOpen, closePopup }) {

  return (
    <>
      <div className={ `navigation ${isOpen && 'navigation_burger' }` }>
        { isOpen && <NavLink onClick={ closePopup } className='navigation__link' to='/'>Главная</NavLink> }

        <NavLink className='navigation__link'
          activeClassName={ `navigation__link_active ${isOpen && 'navigation__link_line' }` }
          to='/movies'>Фильмы</NavLink>

        <NavLink className='navigation__link'
          activeClassName={ `navigation__link_active ${isOpen && 'navigation__link_line' }` }
          to='/saved-movies'>Сохранённые фильмы</NavLink>
      </div>
      <NavLink to='/profile' className='navigation__link navigation__link_account'
      activeClassName='nagivation__link_active'>
        <img className='nagivation__account-image' src={ accoutImage } alt='Картинка кнопки аккаунта' />
        <span>Аккаунт</span>
      </NavLink>
    </>
  )
}

export default Navigation;
