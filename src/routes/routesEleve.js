import React from 'react';
import NavbarEleve from '../navbar/NavbarEleve';
import EleveCoursCarte from '../eleve/listecourseleve/EleveCoursCarte';


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
        {/* Assurez-vous de passer l'ID de la classe à EleveCoursCarte */}
        <EleveCoursCarte id_classe={1} />
      </div>
    )
  },
  {
    path: "/eleve/notes",
    element: (
      <div>
        <NavbarEleve />
        <div>Je suis la page des notes pour les élèves</div>
      </div>
    )
  }
];

export default routesEleve;
