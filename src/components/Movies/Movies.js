import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies({ handleSubmitSearch, films, loader, erorrFilms, handleSearchShortFilms, notFoundFilms,
  handleLikeFilm, saveMovies, handleDeleteMovie }) {

  return (
    <>
    <SearchForm handleSubmitSearch={ handleSubmitSearch } handleSearchShortFilms={ handleSearchShortFilms }/>
    <MoviesCardList films={ films } loader={ loader } erorrFilms={ erorrFilms } notFoundFilms={ notFoundFilms }
    handleLikeFilm={ handleLikeFilm } saveMovies={ saveMovies } handleDeleteMovie={ handleDeleteMovie }
    />
    </>
  )
}

export default Movies;
