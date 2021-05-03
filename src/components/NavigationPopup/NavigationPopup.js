import React from 'react'
import Navigation from '../Navigation/Navigation';
import closeBurger from '../../images/close.svg';
import './NavigationPopup.css';

function NavigationPopup({ isOpen, closePopup }) {

  return (
    <section className={ `popup-side ${isOpen && 'popup-side_opened'}` }>
      <div className='popup-side__container'>
        <button className='popup-side__button-close' onClick={ closePopup }>
          <img className='popup-side__button-image' src={ closeBurger } alt='Закртие меню' />
        </button>
        <Navigation isOpen={ isOpen } closePopup={ closePopup }/>
      </div>
    </section>
  )
}

export default NavigationPopup;
