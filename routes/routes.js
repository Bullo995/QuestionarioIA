const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const domandeModel = require("../model/domande")

router.get('/', (req, res) => {
    const errors = req.query.errori ? JSON.parse(req.query.errori) : null;
    const config = req.query.valori ? JSON.parse(req.query.valori) : null;
    const success = req.query.successo ? true : false;
    res.render('index',{ domande:domandeModel, errori: errors, valori: config, successo:success });
});

router.post('/invio', controller.salvaQuestionario);

module.exports = router;
