const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = (req, res) => {
    res.json({
        status: 'los empleados vas aqui'
    });
}
employeeCtrl.createEmploye = function()
{

}
employeeCtrl.geteEmploye = function()
{

}
employeeCtrl.EditEmploye = function()
{

}
employeeCtrl.deleteEmploye = function()
{

}



module.exports = employeeCtrl;