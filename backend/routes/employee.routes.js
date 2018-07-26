const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee.controller');

router.get('/', employee.getEmployees);
router.post('/', employee.createEmploye);
router.get('/:id', employee.geteEmploye);
router.put('/:id', employee.EditEmploye);
router.delete('/:id', employee.deleteEmploye);

module.exports = router;