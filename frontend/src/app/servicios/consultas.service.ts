import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta } from '../modelos/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  SeleccionarConsulta: Consulta;
  Usuarios: Consulta[];
  readonly URL_API = 'http://localhost:3000/consultas';
  

  constructor(private http: HttpClient) { 
    this.SeleccionarConsulta = new Consulta();
  }

  ObtenerConsulta()
  {
    return this.http.get(this.URL_API);
  }

  AgregarUsuario(Consulta: Consulta)
  {
    return this.http.post(this.URL_API, Consulta);
  }
  ActualizarUsuario(consulta: Consulta)
  {
    return this.http.put(this.URL_API + `/${consulta._id}`, consulta);
  }
  EliminarUsuario(_id: string)
  {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
