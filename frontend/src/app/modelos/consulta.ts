export class Consulta {

constructor (_id = '',Nombres= '', Apellidos='',Sexo='', Nacionalidad='', Ocupación='', Correo='',Contra ='',  ContraR='')
{
    this._id= _id;
    this.Nombres= Nombres;
    this.Apellidos= Apellidos;
    this.Sexo= Sexo;
    this.Nacionalidad= Nacionalidad;
    this.Ocupación= Ocupación;
    this.Correo= Correo;
    this.Contra= Contra;
    this.ContraR= ContraR;
}

    _id: string;
    Nombres: string;
    Apellidos: string;
    Sexo: string;
    Nacionalidad: string;
    Ocupación: string;
    Correo: string;
    Contra: string;
    ContraR: string
    
}
