import React from 'react';
import NavbarEleve from '../navbar/NavbarEleve';
import EleveCoursCarte from '../eleve/listecourseleve/EleveCoursCarte';
import EleveNotesCarte from '../eleve/fichenoteeleve/EleveNoteCarte';
import '../App.css';

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
        <h1 className="center-text">COURS</h1>
        <EleveCoursCarte id_classe={1} />
      </div>
    )
  },
  {
    path: "/eleve/notes",
    element: (
      <div>
        <NavbarEleve />
        <h1 className="center-text">NOTES</h1>
        <EleveNotesCarte id_classe={1} id_eleve={1} />
      </div>
    )
  }
];

export default routesEleve;
