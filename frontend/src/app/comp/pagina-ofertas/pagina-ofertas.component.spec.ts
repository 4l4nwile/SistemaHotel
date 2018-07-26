import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaOfertasComponent } from './pagina-ofertas.component';

describe('PaginaOfertasComponent', () => {
  let component: PaginaOfertasComponent;
  let fixture: ComponentFixture<PaginaOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
