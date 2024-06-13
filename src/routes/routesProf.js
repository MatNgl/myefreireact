import React from 'react';
import NavbarProf from '../navbar/NavbarProf';
import ListeCoursProf from '../prof/listecoursprof/ListeCoursProf';
import { eleves } from '../eleve/eleves';
import EleveListe from '../eleve/EleveListe';
import FicheNotesProf from '../prof/fichenotesprof/FicheNotesProf';

const routesProf = [
  {
    path: "/prof/cours",
    element: (
      <div>
        <NavbarProf />
        <ListeCoursProf />
      </div>
    )
  },
  {
    path: "/prof/classe",
    element: (
      <div>
        <NavbarProf />
        <EleveListe eleves={eleves} />
      </div>
    )
  },
  {
    path: "/prof/notes/:libelleClasse/:libelleCours",
    element: (
      <div>
        <NavbarProf />
        <FicheNotesProf />
      </div>
    )
  }
];

export default routesProf;
