import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../servicios/consultas.service';
@Component({
  selector: 'app-pagina-registro',
  templateUrl: './pagina-registro.component.html',
  styleUrls: ['./pagina-registro.component.scss'],
  providers:[ConsultasService]
})
export class PaginaRegistroComponent implements OnInit {

  constructor(private consultasService: ConsultasService) { }

  ngOnInit() {
  }

}
