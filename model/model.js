const db = require("../config/db");


class DBUpdater {
    constructor(nome,email,telefono,messaggio){
        this.nome = nome;
        this.email = email;
        this.telefono = telefono;
        this.messaggio = messaggio;
    }
 
    crea() {
        let sql = `
        INSERT INTO preventivo(nome, email, telefono, messaggio) 
        VALUES ($1, $2, $3, $4);
        `;
    
        return db.query(sql, [this.nome, this.email, this.telefono, this.messaggio])
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