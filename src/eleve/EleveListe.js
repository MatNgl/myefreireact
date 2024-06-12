import EleveCarte from "./EleveCarte/EleveCarte";


const EleveListe = ({ eleves }) => {
    return(
        <div>
            <h1> liste des élèves : </h1>
            <div>
                {eleves.map(eleve => (
                    <EleveCarte key={eleve.id} eleve={eleve} />
                ))}
            </div>
        </div>
    );
};

export default EleveListe;