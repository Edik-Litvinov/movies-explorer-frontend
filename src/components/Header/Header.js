import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import logo from '../../images/logo.svg';

function Header({ burger, isLogin }) {
  const { pathname } = useLocation();
  const displayHeader = ['/profile', '/movies', '/saved-movies', '/']
  const transparentHeader = ['/profile', '/movies', '/saved-movies']
  const { width } = useWindowDimensions();

    return (
      <>
      { (displayHeader.includes(pathname)) &&
        <div className={ `header ${(transparentHeader.includes(pathname) || isLogin) && 'header_transparet'}` }>
          <div className='header__wrapper'>
            <Link className='header__home' to='/'>
              <img className='header__image' src={ logo } alt='Лого'/>
            </Link>
            { isLogin
            ? ((transparentHeader.includes(pathname) || isLogin ) && width > 768) &&  <Navigation />
            : <>
              <Link to='/signup' className='header__signup'>Регистрация</Link>
              <Link to='/signin' className='header__signin'>Войти</Link>
            </>
            }
            { (isLogin && (width <= 768)) && <BurgerMenu burger={ burger }/> }
          </div>
        </div>
      }
      </>
    );
}

export default Header;
