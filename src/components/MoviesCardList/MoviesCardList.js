import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  const { pathname } = useLocation();
  return (
    <>
      <div className={`film-list ${pathname === '/saved-movies' && 'film-list_margin'} `}>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <button className={`film-list__button ${pathname === '/saved-movies' && 'film-list__button-none'} `}>Ещё</button>
      </div>
    </>
  )
}

export default MoviesCardList;
