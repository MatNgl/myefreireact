// EleveCarte.jsx
import './EleveCarte.css';
import { classes } from '../../classe/classes';

const getClasseLibelle = (id_classe) => {
    const classe = classes.find(classe => classe.id === id_classe);
    return classe ? classe.libelle : 'Classe inconnue';
};

const EleveCarte = ({ eleve }) => {
    return (
        <div className="eleve-carte">
            <img src={eleve.image} alt={`${eleve.prenom} ${eleve.nom}`} />
            <h1>{eleve.prenom} {eleve.nom}</h1>
            <p>Classe : {getClasseLibelle(parseInt(eleve.id_classe))}</p>
        </div>
    );
};

export default EleveCarte;
