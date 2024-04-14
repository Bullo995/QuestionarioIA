const DBUpdater = require('../model/model')

exports.salvaPreventivo = async (req, res, next) => {
    try {
        
        let nome = req.body.nome;
        let email = req.body.email;
        let telefono = req.body.telefono;
        let messaggio = req.body.messaggio === "" ? null : req.body.messaggio;
       
        var err={};

          if(!checkNomeL(nome) && nome == "" ){
            err["nome "] = "il nome non è valido"
          }

          if(!checkEmail(email) || email ==""){
            err["email"] = "l'email non è valido"
          }

          if(!checkPhoneNumber(telefono) || telefono =="" ){
            err["telefono"] = "il telefono non è valido"
          }
            
          if (Object.keys(err).length > 0) {
            //agiungi invio errore  a frontend
            console.log("Si sono verificati i seguenti errori:");
            console.log(err);
            res.status(201).json({message : err})
          } else {
            let salvaPreventivo = new DBUpdater (
              nome,
              email,
              telefono,
              messaggio 
            );
            salvaPreventivo.crea(); 
            //res.status(201).json({message : "Preventivo elaborato"}) 
            //agiungi invio sucesso frontend
          }  
        
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  };
  
  //handler check lunghezza nome 
  function checkNomeL(name) {
    return name.length <= 20;
  }

// Handler per verificare se un'email è valida
  function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function checkPhoneNumber(phoneNumber) {
    // Si suppone un formato specifico per i numeri di cellulare europei senza spazi, come ad esempio +XXXXXXXXXXX
    const phoneRegex = /^\+\d{2}\d{9,10}$/;
    return phoneRegex.test(phoneNumber);
}
