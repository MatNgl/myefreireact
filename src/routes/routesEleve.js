// routesEleve.js
import React from 'react';
import NavbarEleve from '../navbar/NavbarEleve';
import EleveListe from '../eleve/EleveListe'; // Chemin correct vers EleveListe
import { eleves } from '../eleve/eleves'; // Chemin correct vers eleves

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
  },
  {
    path: "/eleve/notes",
    element: (
      <div>
        <NavbarEleve />
        <div>Je suis la page des notes pour les élèves</div>
      </div>
    )
  },
  {
    path: "/eleve/classe",
    element: (
      <div>
        <NavbarEleve />
        <div>Je suis la page de la classe de l'élève</div>
        <EleveListe eleves={eleves} /> {/* Utiliser EleveListe ici */}
      </div>
    )
  }
];

export default routesEleve;
