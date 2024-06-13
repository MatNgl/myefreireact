import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { eleves } from '../../eleve/eleves';
import { classes } from '../../classe/classes';
import { notes as notesJson } from '../../note/note';
import { cours } from '../../cours/cours';
import './FicheNotesProf.css';

const FicheNotesProf = () => {
    const { libelleClasse, libelleCours } = useParams();

    const classe = classes.find(c => c.libelle === libelleClasse);
    const id_classe = classe ? classe.id_classe : null;

    const elevesClasse = eleves.filter(eleve => eleve.id_classe === id_classe);

    const coursInfo = cours.find(c => c.libelle === libelleCours);
    const id_cours = coursInfo ? coursInfo.id_cours : null;

    const notesNonNull = elevesClasse.map(eleve => {
        const note = notesJson.find(note => note.id_eleve === eleve.id && note.id_cours === id_cours);
        return note ? { ...note } : { id_eleve: eleve.id, id_cours: id_cours, point: '' };
    });

    const [modifiedNotes, setModifNote] = useState(notesNonNull);

    const modifNote = (id_eleve, newNote) => {
        const updatedNotes = modifiedNotes.map(note =>
            note.id_eleve === id_eleve ? { ...note, point: newNote } : note
        );
        setModifNote(updatedNotes);
    };

    const calculMoyenne = () => {
        const totalPoints = modifiedNotes.reduce((sum, note) => sum + (parseFloat(note.point) || 0), 0);
        return (modifiedNotes.length ? (totalPoints / modifiedNotes.length).toFixed(2) : 0);
    };

    return (
        <div>
            <h1>Notes pour {libelleClasse} - {libelleCours}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {elevesClasse.map(eleve => {
                        const noteEleve = modifiedNotes.find(note => note.id_eleve === eleve.id) || { point: '' };
                        return (
                            <tr key={eleve.id}>
                                <td>{eleve.prenom}</td>
                                <td>{eleve.nom}</td>
                                <td>
                                    <input
                                        type="number"
                                        value={noteEleve.point}
                                        onChange={(event) => modifNote(eleve.id, event.target.value)}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h2>Moyenne de la classe: {calculMoyenne()}</h2>
        </div>
    );
};

export default FicheNotesProf;
