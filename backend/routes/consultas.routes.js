const express = require('express');
const router = express.Router();
const consulta = require('../controllers/consultas.controller');

router.get('/', consulta.getUsuarios);
router.post('/', consulta.createUsuario);
router.get('/:id', consulta.geteUsuario);
router.put('/:id', consulta.EditUsuario);
router.delete('/:id', consulta.deleteUsuario);

module.exports = router;