import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useFormValidation } from '../../hooks/useForm';

function SearchForm({ handleSubmitSearch, handleSearchShortFilms }) {
  const { values, handleChange, resetForm, errors, isValid } = useFormValidation();

  const [ searchError, setSearchError ] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitSearch(values.searchForm);
    resetForm();
  }

  function changeSearchForm(e) {
    setSearchError('');
    handleChange(e);
  }

  function mouseEnter() {
    if(!values.searchForm) {
      setSearchError('Поле не должно быть пустым');
    } else {
      mouseLeave()
    }
  }

  function mouseLeave() {
    setSearchError('');
  }

  return (
  <>
    <form onSubmit={ handleSubmit } className='search-form' noValidate>
      <input type='text' name='searchForm' required autoComplete="off" className='search-form__input' value={ values.searchForm || '' }
      placeholder='Фильм' onChange={ changeSearchForm }/>
      <div onMouseEnter={ mouseEnter } >
      <button disabled={ !isValid } type='submit' className={ !isValid ? 'search-form__button search-form__button_disable' : 'search-form__button'}>Поиск</button>
      </div>
    </form>
    <span className='search-form__error'>{ searchError ? searchError : errors.searchForm ? errors.searchForm : ''  }</span>
    <FilterCheckbox handleSearchShortFilms={ handleSearchShortFilms }/>
  </>
  )
}

export default SearchForm;
