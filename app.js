const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controller/controller');

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// View Engine Setup (assuming EJS):
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files Middleware:
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// Routes
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/test', controller.salvaPreventivo);

router.get('/preventivo', (req, res) => {
    res.render('preventivo');
});

router.get('/info',(req, res) => {
    res.render('info');
});

app.use('/', router);

// Error Handling Middleware:
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the Server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});