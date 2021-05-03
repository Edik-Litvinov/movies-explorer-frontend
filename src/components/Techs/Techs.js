import React from 'react';
import NavTab from '../NavTab/NavTab';
import '../Techs/Techs.css';

function Techs() {

  return (
    <section className='techs'>
      <NavTab title='Технологии' padding={ true }/>
      <div className='techs__wrapper'>
        <h2 className='techs__title'>7 технологий</h2>
        <p className='techs__subtitle'>
          На курсе веб-разработки мы освоили технологии, которые применили в&nbsp;дипломном проекте.
        </p>
      </div>
      <ul className='techs__list'>
        <li className='techs__item'>HTML</li>
        <li className='techs__item'>CSS</li>
        <li className='techs__item'>JS</li>
        <li className='techs__item'>React</li>
        <li className='techs__item'>Git</li>
        <li className='techs__item'>Express.js</li>
        <li className='techs__item'>MongoDB</li>
      </ul>
    </section>
  )
}

export default Techs;
