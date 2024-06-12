// src/routes/routesProf.js
import React from 'react';
import NavbarProf from '../navbar/NavbarProf';
import ListeCoursProf from '../prof/listecoursprof/ListeCoursProf';

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
        <ListeCoursProf />
      </div>
    )
  }
];

export default routesProf;
