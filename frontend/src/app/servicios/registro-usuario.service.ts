import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroUsuarios } from '../modelos/registro-usuarios';

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {

  SeleccionarUsuario: RegistroUsuarios;
  usuario: RegistroUsuarios[];

  readonly URL_API = 'http://localhost:3000/RegistroUsuarios';

  constructor(private http: HttpClient) {
    this.SeleccionarUsuario = new RegistroUsuarios();
  }

  ObtenerUsuario()
      {
        return this.http.get(this.URL_API);
      }
  AgregarUsuario(usuario: RegistroUsuarios)
      {
        return this.http.post(this.URL_API, usuario);
      }
  ActualizarUsuario(usuario: RegistroUsuarios)
      {
        return this.http.put(this.URL_API + `/${usuario._id}`, usuario);
      }
  EliminarUsuario(_id: string)
      {
        return this.http.delete(this.URL_API + `/${_id}`);
      }
}
