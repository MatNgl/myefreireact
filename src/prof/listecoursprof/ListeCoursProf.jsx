// src/prof/listecoursprof/ListeCoursProf.jsx
import React from 'react';
import { cours } from '../../cours/cours';
import { classes } from '../../classe/classes';
import './ListeCoursProf.css';

const ListeCoursProf = () => {
    const coursProf = cours.filter(c => c.id_prof === 1);

    const getClasse = (id_classe) => {
        const classe = classes.find(c => c.id_classe === id_classe);
        return classe ? classe.libelle : 'Classe inconnue';
    };

    return (
        <div className="cours">
            <h1>Liste de vos cours :</h1>
            <div className="card-cours">
                {coursProf.map((cours, index) => (
                    <div key={index} className="card">
                        <h3 className="card-titre">{cours.libelle}</h3>
                        <div>
                            <p>{getClasse(cours.id_classe)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListeCoursProf;
