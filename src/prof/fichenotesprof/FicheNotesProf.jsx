import React from 'react';
import { useParams } from 'react-router-dom';
import { eleves } from '../../eleve/eleves';
import { classes } from '../../classe/classes';
import { notes } from '../../note/notes';
import './FicheNotesProf.css';

const FicheNotesProf = () => {
    const { libelleClasse, libelleCours } = useParams();

    const classe = classes.find(c => c.libelle === libelleClasse);
    const id_classe = classe ? classe.id_classe : null;

    const elevesFiltres = eleves.filter(eleve => eleve.id_classe === id_classe);

    const getNoteForEleve = (eleveId) => {
        const note = notes.find(note => note.id_eleve === eleveId && note.libelleCours === libelleCours);
        return note ? note.note : '';
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
                    {elevesFiltres.map((eleve, index) => (
                        <tr key={index}>
                            <td>{eleve.prenom}</td>
                            <td>{eleve.nom}</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder={getNoteForEleve(eleve.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FicheNotesProf;
