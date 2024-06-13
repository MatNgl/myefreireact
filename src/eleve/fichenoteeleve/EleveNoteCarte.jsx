import React from 'react';
import { classes } from '../../classe/classes';
import { cours } from '../../cours/cours';
import { profs } from '../../prof/prof';
import { notes } from '../../note/note';
import './elevenotecarte.css';

const GetLibelleClasse = (id_classe) => {
    const classe = classes.find(classe => classe.id_classe === id_classe);
    return classe ? classe.libelle : 'Classe inconnue';
};

const GetNomPrenomProf = (id_prof) => {
    const professeur = profs.find(prof => prof.id_prof === id_prof);
    return professeur ? `${professeur.prenom} ${professeur.nom}` : 'Professeur inconnu';
};

const GetNotes = (id_cours, id_eleve) => {
    const note = notes.find(note => note.id_cours === id_cours && note.id_eleve === id_eleve);
    return note ? note.point : 'Pas de note';
};

const GetCoef = (id_cours, id_eleve) => {
    const note = notes.find(note => note.id_cours === id_cours && note.id_eleve === id_eleve);
    return note ? note.coef : 1;
};

const CalcMoyenne = (id_eleve) => {
    const notesEleve = notes.filter(note => note.id_eleve === id_eleve);
    const totalPointsPonderes = notesEleve.reduce((sum, note) => sum + (note.point * note.coef), 0);
    const totalCoefficients = notesEleve.reduce((sum, note) => sum + note.coef, 0);
    return totalCoefficients > 0 ? (totalPointsPonderes / totalCoefficients).toFixed(2) : 'Pas de notes';
};

const EleveNotesCarte = ({ id_classe, id_eleve }) => {
    const libelleClasse = GetLibelleClasse(id_classe);
    const coursDansClasse = cours.filter(cour => cour.id_classe === id_classe);
    const moyenne = CalcMoyenne(id_eleve);

    return (
        <div className="eleve-cours-carte">
            <h2>Classe : {libelleClasse}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom du Cours</th>
                        <th>Nom du Professeur</th>
                        <th>Notes</th>
                        <th>Coef</th>
                    </tr>
                </thead>
                <tbody>
                    {coursDansClasse.map(cour => (
                        <tr key={cour.id}>
                            <td>{cour.libelle}</td>
                            <td>{GetNomPrenomProf(cour.id_prof)}</td>
                            <td>{GetNotes(cour.id, id_eleve)}</td>
                            <td>{GetCoef(cour.id, id_eleve)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="moyenne-eleve">
                <h3>Moyenne pondérée de l'élève : {moyenne}/20</h3>
            </div>
        </div>
    );
};

export default EleveNotesCarte;
