const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./databaseRegistroCliente');

// configuracion pueeto
app.set('port', process.env.PORT || 3000);


app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.use('/RegistroUsuarios',require('./routes/consultas.routes'));
// iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});