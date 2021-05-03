import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';


function Footer() {
  const { pathname } = useLocation();
  const routes = ['/proile', '/movies', '/saved-movies', '/']

  return (
    <>
    { (routes.includes(pathname)) &&
    <div className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__line'></div>
      <div className='footer__wrapper'>
        <p className='footer__date'>&copy; 2020</p>
        <nav className='footer__links'>
          <ul className='footer__list'>
            <li className='footer__links-list'>
              <a href='https://praktikum.yandex.ru/' className='footer__link' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className='footer__links-list'>
              <a href='https://github.com/' className='footer__link' target='_blank' rel="noreferrer">Github</a>
            </li>
            <li className='footer__links-list'>
              <a href='https://ru-ru.facebook.com/' className='footer__link' target='_blank' rel="noreferrer">Facebook</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    }
    </>
  )
}

export default Footer;
