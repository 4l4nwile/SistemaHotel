import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './comp/cabecera/cabecera.component';
import { ContenidoInicioComponent } from './comp/contenido-inicio/contenido-inicio.component';
import { ContenidoPrincipalComponent } from './comp/contenido-principal/contenido-principal.component';
import { FormDerechoComponent } from './comp/form-derecho/form-derecho.component';
import { FormIzquierdoComponent } from './comp/form-izquierdo/form-izquierdo.component';
import { PaginaErrorComponent } from './comp/pagina-error/pagina-error.component';
import { PaginaFacturaComponent } from './comp/pagina-factura/pagina-factura.component';
import { PaginaInicioComponent } from './comp/pagina-inicio/pagina-inicio.component';
import { PaginaLoginComponent } from './comp/pagina-login/pagina-login.component';
import { PaginaNosotrosComponent } from './comp/pagina-nosotros/pagina-nosotros.component';
import { PaginaOfertasComponent } from './comp/pagina-ofertas/pagina-ofertas.component';
import { PaginaRecuperarcontraComponent } from './comp/pagina-recuperarcontra/pagina-recuperarcontra.component';
import { PaginaRegistroComponent } from './comp/pagina-registro/pagina-registro.component';
import { PaginaReportesComponent } from './comp/pagina-reportes/pagina-reportes.component';
import { PaginaReservaComponent } from './comp/pagina-reserva/pagina-reserva.component';
import { PaginaRoomsComponent } from './comp/pagina-rooms/pagina-rooms.component';
import { PaginaServiciosComponent } from './comp/pagina-servicios/pagina-servicios.component';
import { PieComponent } from './comp/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ContenidoInicioComponent,
    ContenidoPrincipalComponent,
    FormDerechoComponent,
    FormIzquierdoComponent,
    PaginaErrorComponent,
    PaginaFacturaComponent,
    PaginaInicioComponent,
    PaginaLoginComponent,
    PaginaNosotrosComponent,
    PaginaOfertasComponent,
    PaginaRecuperarcontraComponent,
    PaginaRegistroComponent,
    PaginaReportesComponent,
    PaginaReservaComponent,
    PaginaRoomsComponent,
    PaginaServiciosComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
