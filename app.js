const express = require('express');
const gestionRouter = require('./routes/gestion')
const userRouter = require('./routes/user.routes')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/tutoNodeBDD";
const app = express();

app.use(bodyParser.json());
app.use('/tuto/test', gestionRouter);
app.use('/tuto/auth', userRouter);

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('connexion db réussi !'))
.catch(() => console.log('connexion db échouée !'));

module.exports = app;