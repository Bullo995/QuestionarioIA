const DBUpdater = require('../model/model')

exports.salvaPreventivo = async (req, res, next) => {
    try {
        
        let nome = req.body.nome;
        let email = req.body.email;
        let telefono = req.body.telefono;
        let messaggio = req.body.messaggio === "" ? null : req.body.messaggio;
        console.log(nome);
        let salvaPreventivo = new DBUpdater (
            nome,
            email,
            telefono,
            messaggio
        );

     
        salvaPreventivo.crea();
        //aggiungere avviso invio
  
      //res.status(201).json({ message: "Categoria creata" });
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  };
  
