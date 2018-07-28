const mongoose = require('mongoose');
const URI = 'mongodb://localhost/RegistroClientes';

mongoose.connect(URI)
    .then(db => console.log('base de datos conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;