import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Registration from '../Registration/Registration';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import NavigationPopup from '../NavigationPopup/NavigationPopup';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { apiBeatfilm } from '../../utils/ApiBeatfilm';
import { auth } from '../../utils/auth';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import noImage from '../../images/noimage.jpg';


function App() {
  const history = useHistory();
  const { pathname } = useLocation();

  const [ burger, setBurger ] = React.useState(false);
  const [ films, setFilms ] = React.useState([]);
  const [ isLogin, setIsLogin ] = React.useState(false);
  const [ currentUser, setCurrentUser ] = React.useState({ email: '', name: ''});
  const [ loader, setLoader ] = React.useState(false);
  const [ serverResponse, setServerResponse ] = React.useState('');
  const [ updateProfileMessage, setUpdateProfileMessage ] = React.useState('');
  const [ erorrFilms, setErrorFilms ] = React.useState(null);
  const [ notFoundFilms, setNotFoundFilms ] = React.useState(null);
  const [ preRout, setPreRout ] = React.useState({ prevPath: pathname });
  const [ saveMovies, setSaveMovies ] = React.useState([]);
  const [ checkCheckbox, setCheckCheckbox ] = React.useState({check: false});

  function burgerClick() {
    setBurger(true);
  }

  function closePopup() {
    setBurger(false);
  }

  function resetResponseMessage() {
    setServerResponse('');
  }



  function handleSearchShortFilms() {
    const checkPathname = pathname === '/saved-movies' ? saveMovies : films
    const checkState = pathname === '/saved-movies' ? setSaveMovies : setFilms

    if(checkPathname.length === 0) {
      setCheckCheckbox((state) => {
        return {
          ...state,
          check: !state.check
        }
      })
    }else if(checkCheckbox.check === false && checkPathname.length !== 0) {
      setCheckCheckbox((state) => {
        return {
          ...state,
          check: !state.check
        }
      })
      let checkShortWithOutSubmit = checkPathname.filter((movie) => {
        return movie.duration <= 40
      })
      if(checkShortWithOutSubmit.length === 0) {
        setNotFoundFilms('Ничего не найдено')
      } else {
        return checkState(checkShortWithOutSubmit);
      }
    } else {
      setCheckCheckbox((state) => {
        return {
          ...state,
          check: !state.check
        }
      })
      setFilms(JSON.parse(localStorage.getItem('searchResult')));
      setSaveMovies(JSON.parse(localStorage.getItem('savedMovi')));
    }
  }

  function handleLikeFilm(data) {
    mainApi.postSavedMovies(data)
    .then((res) => {
      setSaveMovies([ ...saveMovies, res ]);
    })
    .catch((err) => console.log(err))
  }

  function handleDeleteMovie(movieId) {
    mainApi.deleteMovies(movieId)
      .then((res) => {
        mainApi.getSavedMovies()
          .then(res => setSaveMovies(res))
          .catch((err) => setErrorFilms(err.message))
      })
      .catch(err => console.log(err))
  }

  function protectData(data) {
   const array = data.map((item) => {
      const imageURL = item.image ? `https://api.nomoreparties.co${item.image.url}` : noImage
      const checkThumbnailURL = item.image
        ? `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`
        : noImage
      const nameENG = item.nameEN ? item.nameEN : item.nameRU
      const nameRUS = item.nameRU ? item.nameRU : item.nameEN
      const checkCountry = item.country ? item.country : "country not found";
      return {
          country: checkCountry,
          director: item.director,
          duration: item.duration,
          year: item.year,
          description: item.description,
          image: imageURL,
          trailer: item.trailerLink,
          thumbnail: checkThumbnailURL,
          id: item.id,
          nameRU: nameRUS,
          nameEN: nameENG,
      };
  });
  return array
  }

  function search(res, values, checkbox) {
    const newArray = res.filter((movie) => {
     if(checkbox.check === true && (movie.nameRU.toLowerCase().includes(values.toLowerCase()) || movie.nameEN.toLowerCase().includes(values.toLowerCase()))) {
        return (movie.duration <= 40 && (movie.nameRU.toLowerCase().includes(values.toLowerCase()) || movie.nameEN.toLowerCase().includes(values.toLowerCase())))
      }
     return (
      movie.nameRU.toLowerCase().includes(values.toLowerCase()) || movie.nameEN.toLowerCase().includes(values.toLowerCase()))

    })
    if(newArray.length === 0) {
      setNotFoundFilms('Ничего не найдено');
    } else {
      setNotFoundFilms(null);
    }
    return newArray
  }

  function handleSubmitSearch(values) {
    setLoader(true);
    const storageFilms = localStorage.getItem('movies');
    if(!storageFilms) {
      apiBeatfilm.getFilms()
      .then((res) => {
        setFilms(() => search(protectData(res), values, checkCheckbox));
        localStorage.setItem('movies', JSON.stringify(protectData(res)));
        localStorage.setItem('searchResult', JSON.stringify(search(protectData(res), values, checkCheckbox)));
        setErrorFilms(null);
      })
      .catch(err => setErrorFilms(err.message))
      .finally(() => setLoader(false))
    } else {
    const filmsFromStorage = JSON.parse(storageFilms);
    if(!search(filmsFromStorage, values, checkCheckbox)) {
      setFilms([]);
      setLoader(false);
    } else {
      setFilms(search(filmsFromStorage, values, checkCheckbox));
      localStorage.setItem('searchResult', JSON.stringify(search(filmsFromStorage, values, checkCheckbox)));
      setLoader(false);
    }
    }
  }

  function handleSubmitSavedMovies(values) {
    const fromSavedMovies = JSON.parse(localStorage.getItem('savedMovi'));
    if(!search(fromSavedMovies, values, checkCheckbox)) {
      setNotFoundFilms('Ничего не найдено');
    } else {
      setSaveMovies(() => search(fromSavedMovies, values, checkCheckbox));
    }
  }

  function handleUpdateUserData(values) {
    mainApi.updateUserInfo(values)
      .then((udpateData) => {
        if(udpateData.message === 'Такой емаил уже используется') {
          throw new Error('Такой email уже существует');
        } else if(udpateData.message === 'Поле \"email\" заполнено не корректно') {
          throw new Error('Поле email заполненно не корректно');
        }
        setCurrentUser((state) => {
        return {
          ...state,
          email: udpateData.email,
          name: udpateData.name
        }
      })
      setTimeout(() => setUpdateProfileMessage('Данные успешно обновлены!'), 1000);
      setTimeout(() => setUpdateProfileMessage(''), 3000);
    })
      .catch((err) => {
        if(err.message === 'Такой email уже существует') {
          setServerResponse(err.message);
        } else if(err.message === 'Поле email заполненно не корректно') {
          setServerResponse(err.message);
        }
      })
  }


  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      return
    } else {
      mainApi.getToken(token);
      mainApi.getUserInfo(token)
      .then((response) => {
        setCurrentUser(response);
        setIsLogin(true);
      })
      .catch(err => console.log(err));
    }
  }, [ isLogin ])

  useEffect(() => {
    if(preRout.prevPath === pathname) {
      return
    } else {
      setPreRout((state) => {
        return {
          ...state,
          prevPath: pathname
        }
      })
      setCheckCheckbox({ check: false });
      setNotFoundFilms(null);
    }
  }, [ pathname, preRout ])

  useEffect(() => {
    const searchResult = JSON.parse(localStorage.getItem('searchResult'));
    if(!searchResult) {
      return
    } else  {
      setFilms(searchResult);
    }
  }, [ isLogin, pathname ])

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      return
    } else {
    mainApi.getSavedMovies()
      .then((res) => {
        setSaveMovies(res);
        localStorage.setItem('savedMovi', JSON.stringify(res))
      })
      .catch((err) => setErrorFilms(err.message))
    }
  }, [ isLogin, pathname ])

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      return
    } else {
        history.push(pathname);
    }
  }, [])

  function handleSubmitLogin(values) {
    auth.autorization(values.email, values.password)
      .then((res) => {
        if(res.token) {
          localStorage.setItem('token', res.token);
          setIsLogin(true);
          history.push('/movies');
        } else if(res.message === 'Неправильные почта или пароль') {
          throw new Error('Неправильные почта или пароль');
        } else if(res.message === 'Поле \"email\" заполнено не корректно') {
          throw new Error('Поле email заполненно не корректно');
        } else if(res.message === 'На сервере произошла ошибка') {
          throw new Error('На сервере произошла ошибка. Попробуйте еще раз');
        }
      })
      .catch((err) => {
        if(err.message === 'Неправильные почта или пароль') {
          setServerResponse(err.message);
        } else if(err.message === 'Поле email заполненно не корректно') {
          setServerResponse(err.message);
        } else if(err.message === 'На сервере произошла ошибка. Попробуйте еще раз') {
          setServerResponse(err.message)
        }
      })
  }

  function handleSubmitRegistration(values) {
    auth.registration(values.name, values.email, values.password)
      .then((response) => {
        console.log(response)
        if(response.message === 'Пользователь с таким емайлом уже существует') {
          throw new Error('Пользователь с таким email уже существует');
        } else if(response.message === 'Поле \"email\" заполнено не корректно') {
          throw new Error('Поле email заполненно не корректно');
        } else if(response.message === 'На сервере произошла ошибка') {
          throw new Error('На сервере произошла ошибка. Попробуйте еще раз');
        } else {
          auth.autorization(values.email, values.password)
          .then((res) => {
            if(res.token) {
              localStorage.setItem('token', res.token);
              setIsLogin(true);
              history.push('/movies')
            } else if(res.message === 'На сервере произошла ошибка') {
              throw new Error('На сервере произошла ошибка. Попробуйте еще раз')
            }
          })
          .catch((err) => setServerResponse(err.message))
        }
      })
      .catch((err) => {
        if(err.message === 'Пользователь с таким email уже существует') {
          setServerResponse(err.message);
        } else if(err.message === 'На сервере произошла ошибка. Попробуйте еще раз') {
          setServerResponse(err.message);
        } else if(err.message === 'Поле email заполненно не корректно') {
          setServerResponse(err.message);
        }
      })
  }

  function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    localStorage.removeItem('searchResult');
    localStorage.removeItem('savedMovi');
    setCurrentUser({ email: '', name: ''});
    setFilms([]);
    setIsLogin(false);
  }

  return (
  <CurrentUserContext.Provider value={ currentUser }>
    <div className='page' onClick={ resetResponseMessage }>
      <div className='page__container'>
      <Header burger={ burgerClick } isLogin={ isLogin }/>
      <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>

            <Route path='/signup'>
              <Registration handleSubmitRegistration={ handleSubmitRegistration } serverResponse={ serverResponse } />
            </Route>
            <Route path='/signin'>
              <Login  handleSubmitLogin={ handleSubmitLogin } serverResponse={ serverResponse }/>
            </Route>

            <ProtectedRoute path='/movies' component={ Movies } handleSubmitSearch={ handleSubmitSearch }
            isLogin={ isLogin } films={ films } loader={ loader } erorrFilms={ erorrFilms }
            handleSearchShortFilms={ handleSearchShortFilms } checkCheckbox={ checkCheckbox }
            notFoundFilms={ notFoundFilms } handleLikeFilm={ handleLikeFilm } saveMovies={ saveMovies }
            handleDeleteMovie={ handleDeleteMovie }
            />

            <ProtectedRoute path='/saved-movies' component={ SavedMovies } films={ films } isLogin={ isLogin }
            saveMovies={ saveMovies } handleSearchShortFilms={ handleSearchShortFilms }
            handleSubmitSavedMovies={ handleSubmitSavedMovies } notFoundFilms={ notFoundFilms }
            erorrFilms={ erorrFilms } handleDeleteMovie={ handleDeleteMovie }
            />

            <ProtectedRoute path='/profile' updateUser={ handleUpdateUserData } component={ Profile }
            isLogin={ isLogin } signOut={ signOut } serverResponse={ serverResponse }
            updateProfileMessage={ updateProfileMessage }/>

            <Route path='*'>
              <NotFound />
            </Route>
        </Switch>
        </div>
        <Footer />
        <NavigationPopup isOpen={ burger } closePopup={ closePopup }/>
      </div>
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
