import React from 'react';
import './elevecourscarte.css';
import { classes } from '../../classe/classes';
import { cours } from '../../cours/cours';
import { profs } from '../../prof/prof';

const getClasseLibelle = (id_classe) => {
    const classe = classes.find(classe => classe.id_classe === id_classe);
    return classe ? classe.libelle : 'Classe inconnue';
};

const getProfNom = (id_prof) => {
    const professeur = profs.find(prof => prof.id === id_prof);
    return professeur ? professeur.nom : 'Professeur inconnu';
  };
  

const EleveCoursCarte = ({ id_classe }) => {
    const libelleClasse = getClasseLibelle(id_classe);
    const coursDansClasse = cours.filter(cour => cour.id_classe === id_classe);
    
    return (
        <div className="eleve-cours-carte">
            <h2>Classe : {libelleClasse}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom du Cours</th>
                        <th>Nom du Professeur</th>
                    </tr>
                </thead>
                <tbody>
                    {coursDansClasse.map(cour => (
                        <tr key={cour.id}>
                            <td>{cour.libelle}</td>
                            <td>{getProfNom(cour.id_prof)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EleveCoursCarte;
