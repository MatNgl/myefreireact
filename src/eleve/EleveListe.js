// EleveListe.js
import React from 'react';
import EleveCarte from "./EleveCarte/EleveCarte";
import { classes } from '../classe/classes'; // Chemin correct vers classes.js
import './EleveListe.css'; // Importer le fichier CSS

const EleveListe = ({ eleves }) => {
    // Fonction pour grouper les élèves par classe
    const groupByClass = (eleves) => {
        return eleves.reduce((groups, eleve) => {
            const { id_classe } = eleve;
            if (!groups[id_classe]) {
                groups[id_classe] = [];
            }
            groups[id_classe].push(eleve);
            return groups;
        }, {});
    };

    // Fonction pour obtenir le libellé de la classe
    const getClasseLibelle = (id_classe) => {
        const classe = classes.find(classe => classe.id === id_classe);
        return classe ? classe.libelle : 'Classe inconnue';
    };

    const groupedEleves = groupByClass(eleves);

    return (
        <div>
            <h1>Liste des élèves :</h1>
            {Object.keys(groupedEleves).map(id_classe => (
                <div key={id_classe} className="eleve-classe">
                    <h2>{getClasseLibelle(parseInt(id_classe))}</h2>
                    <div className="eleve-liste">
                        {groupedEleves[id_classe].map(eleve => (
                            <EleveCarte key={eleve.id} eleve={eleve} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EleveListe;
