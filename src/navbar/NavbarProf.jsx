import React from 'react';

const NavbarProf = () => {
  return (
    <div className='Navbar'>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/prof/cours">Cours</a></li>
          <li><a href="/prof/notes">Notes</a></li>
          <li><a href="/prof/classe">Classe </a></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarProf;
