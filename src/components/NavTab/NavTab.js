import React from 'react';
import './NavTab.css';

function NavTab({ title, padding }) {

  return (
    <div className={ `nav-tab ${ padding ? 'nav-tab_padding' : '' }` }>
      <h2 className='nav-tab__title'>{ title }</h2>
    </div>
  );
}

export default NavTab;
