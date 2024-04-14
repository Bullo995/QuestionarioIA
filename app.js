require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = require("./routes/routes");

const app = express();
const port = process.env.PORT;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// View Engine Setup (assuming EJS):
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files Middleware:
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', route);

// Error Handling Middleware:
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the Server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});