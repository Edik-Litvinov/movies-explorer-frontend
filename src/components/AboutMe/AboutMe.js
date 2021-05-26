import React from 'react';
import './AboutMe.css';
import NavTab from '../NavTab/NavTab';
import student from '../../images/student.png';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section id='student' className='student'>
      <NavTab title='Студент'/>
      <div className='student__info'>
        <div className='student__wrapper'>
          <p className='student__name'>Виталий</p>
          <p className='student__profession'>Фронтенд-разработчик, 30 лет</p>
          <p className='student__description'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015
            года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className='student__wrapper-link'>
            <a href='https://ru-ru.facebook.com/' className='student__link' target='_blank' rel="noreferrer">Facebook</a>
            <a href='https://github.com/Edik-Litvinov' className='student__link' target='_blank' rel="noreferrer">Github</a>
          </div>
        </div>
        <img className='student__photo' src={ student } alt='Фото студента'/>
      </div>
      <Portfolio />
    </section>
  )
}

export default AboutMe;
