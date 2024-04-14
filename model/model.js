const db = require("../config/db");


class DBUpdater {
    constructor(config){
        this.data_nascita = config.data_nascita;
        this.luogo_residenza = config.luogo_residenza;
        this.familiarita_ia = config.familiarita_ia ;
        this.opinione_ia = config.opinione_ia ;
        this.impatto_futuro_ia = config.impatto_futuro_ia ;
        this.impatto_futuro_ia_aperta = config.impatto_futuro_ia_aperta ;
        this.paura_sostituzione_lavori = config.paura_sostituzione_lavori ;
        this.paura_sostituzione_lavori_aperta = config.paura_sostituzione_lavori_aperta ;
        this.settori_impatto = config.settori_impatto ;
        this.settori_impatto_aperta = config.settori_impatto_aperta ;
        this.preoccupazione_manipolazione = config.preoccupazione_manipolazione ;
        this.preoccupazione_manipolazione_aperta = config.preoccupazione_manipolazione_aperta ;
        this.contributo_risolvere_problemi = config.contributo_risolvere_problemi ;
        this.contributo_risolvere_problemi_aperta = config.contributo_risolvere_problemi_aperta ;
        this.ottimismo_pessimismo = config.ottimismo_pessimismo ;
        this.ottimismo_pessimismo_aperta = config.ottimismo_pessimismo_aperta ;
        this.istruzione_scolastica = config.istruzione_scolastica ;
        this.istruzione_scolastica_aperta = config.istruzione_scolastica_aperta ;
        this.esperienza_utilizzo_ia = config.esperienza_utilizzo_ia ;
        this.esperienza_utilizzo_ia_aperta = config.esperienza_utilizzo_ia_aperta ;
    }
 
    crea() {
        let sql = `
        INSERT INTO questionario(
            data_nascita,
            luogo_residenza,
            familiarita_ia,
            opinione_ia,
            impatto_futuro_ia,
            impatto_futuro_ia_aperta,
            paura_sostituzione_lavori,
            paura_sostituzione_lavori_aperta,
            settori_impatto,
            settori_impatto_aperta,
            preoccupazione_manipolazione,
            preoccupazione_manipolazione_aperta,
            contributo_risolvere_problemi,
            contributo_risolvere_problemi_aperta,
            ottimismo_pessimismo,
            ottimismo_pessimismo_aperta,
            istruzione_scolastica,
            istruzione_scolastica_aperta,
            esperienza_utilizzo_ia,
            esperienza_utilizzo_ia_aperta
        ) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20);`
    
        return db.query(sql,[
            this.data_nascita,
            this.luogo_residenza,
            this.familiarita_ia,
            this.opinione_ia,
            this.impatto_futuro_ia,
            this.impatto_futuro_ia_aperta,
            this.paura_sostituzione_lavori,
            this.paura_sostituzione_lavori_aperta,
            this.settori_impatto,
            this.settori_impatto_aperta,
            this.preoccupazione_manipolazione,
            this.preoccupazione_manipolazione_aperta,
            this.contributo_risolvere_problemi,
            this.contributo_risolvere_problemi_aperta,
            this.ottimismo_pessimismo,
            this.ottimismo_pessimismo_aperta,
            this.istruzione_scolastica,
            this.istruzione_scolastica_aperta,
            this.esperienza_utilizzo_ia,
            this.esperienza_utilizzo_ia_aperta
            ])
        .then(result => {
            console.log("Riga inserita con successo:", result.rowCount);
            return result; // Ritorna il risultato della query
        })
        .catch(error => {
            console.error("Errore durante l'inserimento della riga:", error);
            throw error; // Rilancia l'errore per gestirlo più in alto
        });
    }
}

module.exports = DBUpdater;