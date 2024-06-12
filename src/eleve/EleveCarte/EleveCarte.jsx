const EleveCarte = ({ eleve }) => {
    return(
        <div>
            <img src={eleve.image} alt={`${eleve.prenom} ${eleve.nom}`} />
            <h1>{eleve.prenom} {eleve.nom}</h1>
            <p> Classe : {eleve.id_classe} </p>
        </div>
    )
}

export default EleveCarte;