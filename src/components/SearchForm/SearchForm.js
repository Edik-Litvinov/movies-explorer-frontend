import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {

  return (
  <>
    <form className='search-form'>
      <input type='text' className='search-form__input' placeholder='Фильм' />
      <button type='submit' className='search-form__button'>Поиск</button>
    </form>
    <FilterCheckbox />
  </>
  )
}

export default SearchForm;
