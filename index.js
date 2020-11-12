const chalk = require('chalk');
const mongoose = require('mongoose');
require('dotenv').config({path: __dirname + '/.env'})
require('./Models/User');
const app = require('./app');

//Database connection
mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.Promise = global.Promise; //Tell mongoose to use Es6 promises
mongoose.connection.on('error', (err) => {
   console.log(chalk.red.bold(`Database connection error -> ${err.message}`))
});


const server = app.listen(8080, () => {
    console.log(chalk.blue.bold.bgBlack(`Express running -> port ${server.address().port}`));
});