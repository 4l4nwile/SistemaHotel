const Consultas = require('../models/consultas');

const ControlConsulta = {};

ControlConsulta.getUsuarios = async (req, res) => {
    const consultas = await Consultas.find();
    res.json(consultas);
}
ControlConsulta.createUsuario = async (req, res) =>
{        const consulta = new Usuarios(req.body);
        await consulta.save();
        res.json(
           {
            'status': 'Empleado guardado'
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
        oficio: req.body.oficio,
        salario: req.body.salario
    };
    await Consultas.findByIdAndUpdate(id, {$set: consulta}, {new: true});
    res.json({status: 'datos actualizados'});
}
ControlConsulta.deleteUsuario = async (req, res, next) => {
    await Consultas.findByIdAndRemove(req.params.id);
    res.json({status: 'eliminado'});
}



module.exports = ControlConsulta;