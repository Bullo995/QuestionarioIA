const DBUpdater = require("../model/model2");

exports.salvaQuestionario = async (req, res, next) => {
  try {
    let config = {};
    let errors = {};

    for (let campo in req.body) {
      let valore = req.body[campo] !== "" ? req.body[campo] : null;
      if (valore == null && !campo.includes("_aperta")) {
        errors[campo] = campo;
      }
      config[campo] = valore;
    }
    
    if (Object.keys(errors).length > 0) {
      let queryString = `?errori=${JSON.stringify(errors)}&valori=${JSON.stringify(config)}`;
      res.redirect('/' + queryString);
    } else {
      let dbUpdater = new DBUpdater(config);
      let result = await dbUpdater.crea();
      res.redirect('/?successo=true');
    }
  } catch (error) {
    console.error("Errore durante il salvataggio del questionario!", error);
    next(error); 
  }
};