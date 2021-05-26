import React from 'react';
import './ProjectBar.css';

function ProjectBar() {

  return (
    <div className='projet__work'>
      <div className='project__backend-wrapper'>
        <div className='project__backend'>
          <p className='project__text'>1 неделя</p>
        </div>
        <p className='project__theme'>Back-end</p>
      </div>
      <div className='project__frontend-wrapper'>
        <div className='project__frontend'>
          <p className='project__text'>4 недели</p>
        </div>
        <p className='project__theme'>Front-end</p>
      </div>
  </div>
  )
}

export default ProjectBar;
