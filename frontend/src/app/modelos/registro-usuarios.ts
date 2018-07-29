export class RegistroUsuarios {

constructor (_id = '',nombres= '', apellidos='',sexo='', nacionalidad='', ocupacion='', correoElectronico='',contrasenia ='',  contraseniaR='')
    {
        this._id= _id;
        this.nombres= nombres;
        this.apellidos= apellidos;
        this.sexo= sexo;
        this.nacionalidad= nacionalidad;
        this.ocupación= ocupacion;
        this.correoElectronico= correoElectronico;
        this.contrasenia= contrasenia;
        this.contraseniaR= contraseniaR;
    }
    _id: string;
    nombres: string;
    apellidos: string;
    fechaNac:string;
    sexo: string;
    nacionalidad: string;
    ocupación: string;
    correoElectronico: string;
    contrasenia: string;
    contraseniaR: string;
}
