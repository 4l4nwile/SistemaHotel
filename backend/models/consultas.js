const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    nombres: { type: String, required: true},
    apellidos: { type: String, required: true },
    oficio: { type: String, required: true },
    salario: { type: Number, required: true}
});

module.exports = mongoose.model('empleado', employeeSchema);