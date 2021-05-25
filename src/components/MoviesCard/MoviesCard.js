import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import like from '../../images/like.svg';
import cross from '../../images/cross.svg';
import disabledLike from '../../images/like-disablle.svg';

function MoviesCard({ film, handleLikeFilm, savedMovie, handleDeleteMovie }) {
  const { pathname } = useLocation();
  const { nameRU, duration, image, trailer  } = film;

  function isLike(savedMovi) {
    return savedMovi.some(i => i.movieId === film.id);
   }

  const liked = isLike(savedMovie)

  function handleLike(e) {
    if(liked) {
      return
    } else {
      handleLikeFilm(film);
    }
  }

  function deleteMovie() {
    const movieId = savedMovie.find(
      (item) => item.movieId === film.movieId);
    handleDeleteMovie(movieId._id);
  }

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
	  let minutes = mins % 60;
    if(hours !== 0) {
      return `${hours}час ${minutes}мин`
    } else {
      return `${minutes}мин`
    }
};

  return (
    <div className='film'>
      <div className='film__wrapper'>
        <div className='film__wrapper-text'>
          <h1 className='film__title'>{ nameRU }</h1>
          <p className='film__subtitle'>{ getTimeFromMins(duration) }</p>
        </div>
        <button className='film__button'>
          { pathname === '/movies' && !liked && <img className='film__like' onClick={ handleLike } src={ disabledLike} alt='Лайк'/> }
          { pathname === '/movies' && liked && <img className='film__like' src={ like } alt='Лайк'/> }
          { pathname === '/saved-movies' &&  <img className='film__like' src={ cross } alt='Кнопка удаления' onClick={ deleteMovie }/> }
        </button>
      </div>
      <a href={ trailer } target='_blank' rel="noreferrer">
        <img className='film__image' src={ image } alt='Ссылка на фильм' />
      </a>
    </div>
  )
}

export default MoviesCard;
