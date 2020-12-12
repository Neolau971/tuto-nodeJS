const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const controller = require('../controllers/controller')

router.get('/', auth, controller.getAllElTest);
router.get('/:id' , auth, controller.getOneElTest);
router.post('/', auth, controller.createElTest);
router.put('/:id', auth, controller.updateElTest);
router.delete('/:id', auth, controller.deleteOneElTest);

module.exports = router;