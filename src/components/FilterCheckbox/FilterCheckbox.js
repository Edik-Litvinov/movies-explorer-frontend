import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {

  return (
    <>
    <div className='toggle-wrapper'>
      <label className='toggle'>
        <input name='toggle' type="checkbox" className='toggle__input'/>
        <span className='toggle__item'></span>
      </label>
      <span className='toggle-wrapeer__text'>Короткометражки</span>
    </div>
    <div className='toggle-line'></div>
  </>
  )
}

export default FilterCheckbox;
