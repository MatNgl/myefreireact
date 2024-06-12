// routesProf.js
import React from 'react';
import NavbarProf from '../navbar/NavbarProf';

const routesProf = [
  {
    path: "/prof",
    element: (
      <div>
        <NavbarProf />
        <div>Je suis la page des profs</div>
      </div>
    )
  },
  {
    path: "/prof/cours",
    element: (
      <div>
        <NavbarProf />
        <div>Je suis la page des cours pour les profs</div>
      </div>
    )
  }
];

export default routesProf;
