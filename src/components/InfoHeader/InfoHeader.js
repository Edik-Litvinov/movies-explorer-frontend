import React from 'react';
import './InfoHeader.css';
import landingLogo from '../../images/landing-logo.svg';

function InfoHeader() {

  return (
    <div className='header__info'>
      <div className='header__info-wrapper'>
        <h1 className='header__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className='header__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button onClick={() => {window.location.href='#student'}} className='header__discover'>Узнать больше</button>
      </div>
        <img className='header__logolanding' src={ landingLogo } alt='Лого лэндинга' />
    </div>
  )
}

export default InfoHeader;
