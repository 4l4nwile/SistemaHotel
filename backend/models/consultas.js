const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    nombres: { type: String, required: true},
    apellidos: { type: String, required: true },
    fechaNac: { type:  String, required: true },
    sexo: { type: String, required: true},
    nacionalidad: { type: String, required: true},
    ocupacion: { type: String, required: true},
    correoElectronico: { type: String, required: true},
    contrasenia: { type: String, required: true},
    contraseniaR: { type: String, required: true}
});

module.exports = mongoose.model('consulta', employeeSchema);