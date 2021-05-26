const express = require('express');

const router = express.Router();
const userController = require('../controllers').user;

router.post('/create', (req, res) => userController.createUser(req, res))
router.put('/update/:id', (req, res) => userController.updateUser(req, res))
router.delete('/delete/:id', (req, res) => userController.deleteUser(req, res))
router.get('/:id', (req, res) => userController.getUserById(req, res))
router.get('/', (req, res) => userController.getUser(req, res))

module.exports = router;