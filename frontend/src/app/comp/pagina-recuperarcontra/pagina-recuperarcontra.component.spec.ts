import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRecuperarcontraComponent } from './pagina-recuperarcontra.component';

describe('PaginaRecuperarcontraComponent', () => {
  let component: PaginaRecuperarcontraComponent;
  let fixture: ComponentFixture<PaginaRecuperarcontraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaRecuperarcontraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRecuperarcontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
