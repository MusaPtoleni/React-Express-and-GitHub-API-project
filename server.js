const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const helmet = require('helmet');
const port = 4000;

// getting all the routes from the router file
const router = require('./routes/routes');

// 
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})