import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from '../../servicios/registro-usuario.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { RegistroUsuarios } from '../../modelos/registro-usuarios';


@Component({
  selector: 'app-pagina-registro',
  templateUrl: './pagina-registro.component.html',
  styleUrls: ['./pagina-registro.component.scss'],
  providers:[RegistroUsuarioService]
})
export class PaginaRegistroComponent implements OnInit {

  constructor(private registroUsuarioService: RegistroUsuarioService) { }

  ngOnInit() {
  }
  AgregarUsuario(form:NgForm)
  {
      this.registroUsuarioService.AgregarUsuario(form.value)
      .subscribe(res =>
      {
          this.limpiarForm(form);
      });

  }
  limpiarForm(form?: NgForm)
  {
      if(form)
      {
        form.reset();
        this.registroUsuarioService.SeleccionarUsuario = new RegistroUsuarios();
      }
  }
}
