import React from 'react';
import NavTab from '../NavTab/NavTab';
import ProjectBar from '../ProjectBar/ProjectBar';
import './AboutProject.css';

function AboutProject() {

  return (
    <section className='project'>
      <NavTab title='О проекте'/>
        <div className='project__list'>
          <p className='project__item project__item_bold project__item_bold_fist'>
              Дипломный проект включал 5 этапов
            </p>
            <p className='project__item project__item_bold project__item_bold_second'>
              На выполнение диплома ушло 5 недель
            </p>
            <p className='project__item project__item_light  project__item_light_thrid'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
            <p className='project__item project__item_light project__item_light_four'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
        </div>
      <ProjectBar />
    </section>
  );
}

export default AboutProject;
