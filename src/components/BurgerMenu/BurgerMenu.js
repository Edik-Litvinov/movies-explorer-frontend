import React from 'react';
import './BurgerMenu.css';

function BurgerMenu({ burger }) {
  const click = () => {
    burger()
  }

  return (
    <button onClick={ click } className='header__burger-button'>
      <span className='header__burger'></span>
    </button>
  )
}

export default BurgerMenu;
