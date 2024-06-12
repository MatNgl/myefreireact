// routesEleve.js
import React from 'react';
import NavbarEleve from '../navbar/NavbarEleve';

const routesEleve = [
  {
    path: "/eleve",
    element: (
      <div>
        <NavbarEleve />
        <div>Je suis la page des élèves</div>
      </div>
    )
  },
  {
    path: "/eleve/cours",
    element: (
      <div>
        <NavbarEleve />
        <div>Je suis la page des cours pour les élèves</div>
      </div>
    )
  }
];

export default routesEleve;
