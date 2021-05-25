import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function MoviesCardList({ films, loader, erorrFilms, notFoundFilms, saveMovies, handleLikeFilm, handleDeleteMovie }) {
  const { pathname } = useLocation();
  const width = useWindowDimensions();
  const location = useLocation();

  function ShowMovies() {

    const [ howMuchToAdd, setHowMuchToAdd ] = React.useState(3);
    const [ current, setCurrent ] = React.useState(0);
    const [ renderFilms, setRenderFilms ] = React.useState([]);

    function getCount(width) {
        if (width.width > 768) {
            return { first: 12, additional: 3 };
        } else if (width.width > 480 && width <= 768) {
            return { first: 8, additional: 2 };
        } else {
            return { first: 5, additional: 2 };
        }
    }

    function renderElseFilms() {
        const count = Math.min(films.length, current + howMuchToAdd);
        const addFilms = films.slice(current, count);
        setRenderFilms([...renderFilms, ...addFilms]);
        setCurrent(count);
    }

    React.useEffect(() => {
        const portion = getCount(width);
        setHowMuchToAdd(portion.additional);
        const count = Math.min(films.length, portion.first);
        setRenderFilms(films.slice(0, count));
        setCurrent(count);
    }, [films]);

    function handleAddFilms() {
      renderElseFilms();
    }

    return { renderFilms, handleAddFilms }

  }

  const { renderFilms, handleAddFilms } = ShowMovies();

  return (
       <>
      <div className={`film-list ${pathname === '/saved-movies' && 'film-list_margin'} `}>
        {
        location.pathname === '/movies'
        ? erorrFilms
          ? <p className="film-list__error">
              Во время запроса произошла ошибка. Возможно,
              проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
            </p>
          : loader
          ? <Preloader />
          : notFoundFilms
          ? <p className='film-list__error'>{ notFoundFilms }</p>
          : renderFilms.map((film) =>
            <MoviesCard key={ film.id } film={ film } handleLikeFilm={ handleLikeFilm } savedMovie={ saveMovies }/>)

        : erorrFilms
        ? <p className="film-list__error">
          Во время запроса произошла ошибка. Возможно,
          проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p>
        : notFoundFilms
        ? <p className='film-list__error'>{ notFoundFilms }</p>
        : saveMovies.map((movie) => <MoviesCard key={ movie.movieId } film={ movie } handleLikeFilm={ handleLikeFilm }
        savedMovie={ saveMovies } handleDeleteMovie={ handleDeleteMovie }/>)

        }
        <button onClick={ handleAddFilms } className={`film-list__button ${pathname === '/saved-movies' && 'film-list__button-none'} `}>Ещё</button>
      </div>
    </>
  )
}


export default MoviesCardList;
