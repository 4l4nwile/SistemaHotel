const Consultas = require('../models/consultas');

const ControlConsulta = {};

ControlConsulta.getUsuarios = async (req, res) => {
    const consultas = await Consultas.find();
    res.json(consultas);
}
ControlConsulta.createUsuario = async (req, res) =>
{        const consulta = new Consultas(req.body);
         await consulta.save();
        res.json(
           {
            'status': 'Datos del Usuario guardados'
           }
        );
}
ControlConsulta.geteUsuario = async (req, res) =>
{
    const consulta = await Consultas.findById(req.params.id);
    res.json(consulta);
}
ControlConsulta.EditUsuario = async (req, res) =>
{       
    const { id } = req.params;
    const consulta = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        fechaNac: req.body.fechaNac,
        sexo: req.body.sexo,
        nacionalidad: req.body.nacionalidad,
        ocupacion: req.body.ocupacion,
        correoElectronico: req.body.correoElectronico,
        contrasenia: req.body.contrasenia,
        contraseniaR: req.body.contraseniaR
    };
    await Consultas.findByIdAndUpdate(id, {$set: consulta}, {new: true});
    res.json({status: 'datos del Usuario actualizados'});
}
ControlConsulta.deleteUsuario = async (req, res, next) => {
    await Consultas.findByIdAndRemove(req.params.id);
    res.json({status: 'Datos del Usuario eliminado'});
}



module.exports = ControlConsulta;