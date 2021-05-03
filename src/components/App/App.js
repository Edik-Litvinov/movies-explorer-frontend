import React from 'react';
import { Route, Switch } from 'react-router-dom';
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


function App() {
  const [ burger, setBurger ] = React.useState(false);

  function burgerClick() {
    setBurger(true)
  }

  function closePopup() {
    setBurger(false)
  }

  return (
    <div className='page'>
      <div className='page__container'>
      <Header burger={ burgerClick }/>
      <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/movies'>
              <Movies />
            </Route>
            <Route path='/saved-movies'>
              <SavedMovies />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/signup'>
              <Registration />
            </Route>
            <Route path='/signin'>
              <Login />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
        </Switch>
        </div>
        <Footer />
        <NavigationPopup isOpen={ burger } closePopup={ closePopup }/>
      </div>
    </div>
  );
}

export default App;
