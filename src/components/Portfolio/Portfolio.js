import React from 'react';
import './Portfolio.css';
import arrowLink from '../../images/arrow__link.svg';

function Portfolio() {

  return (
    <section className='portfolio'>
      <h3 className='portfolio__titile'>Портфолио</h3>
        <div className='portfolio__wrapper'>
          <div className='portfolio__link-wrapper'>
            <h3 className='portfolio__subtitle'>Статичный сайт</h3>
            <a className='portfolio__link' href='https://github.com/Edik-Litvinov/how-to-learn' target='_blank' rel="noreferrer">
              <img className='portfolio__arrow' src={ arrowLink } alt='Стрелка'/>
            </a>
          </div>
        </div>
        <div className='portfolio__wrapper'>
          <div className='portfolio__link-wrapper'>
            <h3 className='portfolio__subtitle'>Адаптивный сайт</h3>
            <a className='portfolio__link' href='https://github.com/Edik-Litvinov/russian-travel' target='_blank' rel="noreferrer">
              <img className='portfolio__arrow' src={ arrowLink } alt='Стрелка'/>
            </a>
          </div>
        </div>
        <div className='portfolio__wrapper'>
          <div className='portfolio__link-wrapper'>
            <h3 className='portfolio__subtitle'>Одностраничное приложение</h3>
            <a className='portfolio__link' href='https://github.com/Edik-Litvinov/movies-explorer-frontend' target='_blank' rel="noreferrer">
              <img className='portfolio__arrow' src={ arrowLink } alt='Стрелка'/>
            </a>
          </div>
        </div>
    </section>
  )
}

export default Portfolio;
