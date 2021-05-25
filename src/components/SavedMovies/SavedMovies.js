import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies({
  saveMovies, films, handleSearchShortFilms, handleSubmitSavedMovies, notFoundFilms, erorrFilms, handleDeleteMovie
}) {

  return (
    <>
      <SearchForm handleSearchShortFilms={ handleSearchShortFilms } handleSubmitSearch={ handleSubmitSavedMovies }/>
      <MoviesCardList saveMovies={ saveMovies } films={ films } notFoundFilms={ notFoundFilms } erorrFilms={ erorrFilms }
      handleDeleteMovie={ handleDeleteMovie }
      />
    </>
  )
}

export default SavedMovies;
