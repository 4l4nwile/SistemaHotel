import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from '../../servicios/registro-usuario.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { RegistroUsuarios } from '../../modelos/registro-usuarios';

@Component({
  selector: 'app-reporte-clientes',
  templateUrl: './reporte-clientes.component.html',
  styleUrls: ['./reporte-clientes.component.scss']
})
export class ReporteClientesComponent implements OnInit {

  constructor(private registroUsuarioService: RegistroUsuarioService) { }

  ngOnInit() {
  this.MostrarUsuarios();

  }

  MostrarUsuarios() {
    this.registroUsuarioService.ObtenerUsuario()
      .subscribe(res => {
        this.registroUsuarioService.usuario = res as RegistroUsuarios[];
        console.log(res);
      });
  }
  actUsuario(form: NgForm)
  {
    this.registroUsuarioService.ActualizarUsuario(form.value)
    .subscribe(res => {
        console.log(res);
    });
  }
  editarUsuario(usuario: RegistroUsuarios)
      {
          this.registroUsuarioService.SeleccionarUsuario = usuario;
      }
   elimUsuario(_id: string)
      {
        if(confirm('Esta seguro de eliminar!'))
        {
          this.registroUsuarioService.EliminarUsuario(_id)
          .subscribe(res =>
          {
              this.MostrarUsuarios();
          });

        }
          
      }

}
