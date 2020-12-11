const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ElementTest = require('./models/elementTest');
const url = "mongodb://localhost:27017/tutoNodeBDD";
const app = express();

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('connexion db réussi !'))
.catch(() => console.log('connexion db échouée !'));

app.use(bodyParser.json());

app.post('/tuto/test', (req, res, next) => {
    delete req.body._id;
    const elementTest = new ElementTest({...req.body});
    elementTest.save()
        .then(() => res.status(201).json({ message: 'objet crée'}))
        .catch(error => res.status(400).json({ error}))
});

app.get('/tuto/test/:id', (req, res, next) => {
    ElementTest.findOne({ _id: req.params.id })
      .then(elementTest => res.status(200).json(elementTest))
      .catch(error => res.status(404).json({ error }));
  });

app.use('/tuto/test', (req, res, next) => {
    ElementTest.find()
      .then(elementTest => res.status(200).json(elementTest))
      .catch(error => res.status(400).json({ error }));
  });

module.exports = app;