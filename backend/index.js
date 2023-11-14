const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./backend/authController');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('frontend'));
app.use('/', authController);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});