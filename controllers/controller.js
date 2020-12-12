const ElementTest = require('../models/elementTest');

exports.createElTest = (req, res, next) => {
  delete req.body._id;
  const elementTest = new ElementTest({...req.body});
  elementTest.save()
    .then(() => res.status(201).json({ message: 'objet crée'}))
    .catch(error => res.status(400).json({ error}));
};

exports.getOneElTest = (req, res, next) => {
  ElementTest.findOne({ _id: req.params.id })
  .then(elementTest => res.status(200).json(elementTest))
  .catch(error => res.status(404).json({ error }));
};

exports.getAllElTest = (req, res, next) => {
  ElementTest.find()
  .then(elementTest => res.status(200).json(elementTest))
  .catch(error => res.status(400).json({ error }));
};

exports.updateElTest = (req, res, next) => {
  ElementTest.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
  .then(() => res.status(200).json({ message: 'Objet modifié !'}))
  .catch(error => res.status(400).json({ error }));
};

exports.deleteOneElTest = (req, res, next) => {
  ElementTest.deleteOne({ _id: req.params.id })
  .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
  .catch(error => res.status(400).json({ error }));
};