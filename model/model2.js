const db = require("../config/db");

class DBUpdater {
    constructor(config) {
        this.config = config;
    }

    crea() {
        const keys = Object.keys(this.config);
        const values = Object.values(this.config);

        let sqlColumns = keys.join(', ');
        let sqlValues = keys.map((_, index) => `$${index + 1}`).join(', ');

        let sql = `
            INSERT INTO questionario(${sqlColumns}) 
            VALUES (${sqlValues});
        `;

        return db.query(sql, values)
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