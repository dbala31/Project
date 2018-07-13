const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const leaderboard = require('./Routes/API/leaderboard');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./config/Keys').mongoURI;

mongoose
    . connect(db)
    . then (() => console.log('MongoDB Connected'))
    . catch(err => console.log(err));

app.get('/', (req, res) => res.send('Dhruv Is A GOD'));

app.use('/API/leaderboard', leaderboard);
const port = process.env.PORT || 5000;


// To display values of variables to display we use back ticks (ES6)
app.listen(port, () => console.log(`Server running on port ${port}`));