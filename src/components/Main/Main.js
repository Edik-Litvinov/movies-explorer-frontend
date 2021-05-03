import React from 'react';
import './Main.css';

import InfoHeader from '../InfoHeader/InfoHeader';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Techs from '../Techs/Techs';

function Main() {
  return (
    <main className='main'>
      <InfoHeader />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
