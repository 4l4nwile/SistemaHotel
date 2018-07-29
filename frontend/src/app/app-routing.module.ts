import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaInicioComponent} from './comp/pagina-inicio/pagina-inicio.component';
import { PaginaLoginComponent} from './comp/pagina-login/pagina-login.component';
import { PaginaReservaComponent} from './comp/pagina-reserva/pagina-reserva.component';
import { PaginaNosotrosComponent} from './comp/pagina-nosotros/pagina-nosotros.component';
import { PaginaOfertasComponent} from './comp/pagina-ofertas/pagina-ofertas.component';
import { PaginaRoomsComponent} from './comp/pagina-rooms/pagina-rooms.component';
import { PaginaServiciosComponent} from './comp/pagina-servicios/pagina-servicios.component';
import { PaginaRecuperarcontraComponent} from './comp/pagina-recuperarcontra/pagina-recuperarcontra.component';
import { PaginaRegistroComponent} from './comp/pagina-registro/pagina-registro.component';
import { PaginaErrorComponent } from './comp/pagina-error/pagina-error.component';
import { ReporteClientesComponent } from './comp/reporte-clientes/reporte-clientes.component';


const routes: Routes = [

  {path: '', component: PaginaInicioComponent},
  {path: 'login', component: PaginaLoginComponent},
  {path: 'reservas', component: PaginaReservaComponent},
  {path: 'nosotros', component: PaginaNosotrosComponent},
  {path: 'ofertas', component: PaginaOfertasComponent},
  {path: 'rooms', component: PaginaRoomsComponent},
  {path: 'servicios', component: PaginaServiciosComponent},
  {path: 'recuperar', component: PaginaRecuperarcontraComponent},
  {path: 'registro', component: PaginaRegistroComponent},
  {path: 'registro', component: PaginaLoginComponent},
  {path: 'repClientes', component: ReporteClientesComponent},
  {path: '**', component: PaginaErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
