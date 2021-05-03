import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import like from '../../images/like.svg';
import cross from '../../images/cross.svg';
import film from '../../images/film.png';

function MoviesCard() {
  const { pathname } = useLocation();

  return (
    <div className='film'>
      <div className='film__wrapper'>
        <div className='film__wrapper-text'>
          <h1 className='film__title'>Фильм</h1>
          <p className='film__subtitle'>1час 42мин</p>
        </div>
        <button className='film__button'>
          <img className='film__like' src={ pathname === '/saved-movies' ? cross : like } alt='Лайк' />
        </button>
      </div>
      <img className='film__image' src={ film } alt='Ссылка на фильм' />
    </div>
  )
}

export default MoviesCard;
