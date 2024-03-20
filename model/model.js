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
            INSERT INTO preventivo(nome,email,telefono,messaggio)
            VALUES(?,?,?,?)
        `;
    
        return db.execute(sql,[this.nome,this.email,this.telefono,this.messaggio]);
    }
}

module.exports = DBUpdater;